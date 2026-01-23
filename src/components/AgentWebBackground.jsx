import { useEffect, useRef } from 'react';
import { workProjects, personalityTraits } from '../data/workData';

export const AgentWebBackground = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const nodesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0, isInside: false });
    const animationFrameRef = useRef(null);
    const lastFrameTime = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        let width = container.offsetWidth;
        let height = container.offsetHeight;

        // Set canvas size
        const resizeCanvas = () => {
            const rect = container.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = width;
            canvas.height = height;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Track mouse position relative to container
        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                isInside: true
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current.isInside = false;
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        // Initialize fewer nodes for better performance
        const initNodes = () => {
            const nodeCount = Math.min(workProjects.length, 8); // Limit to 8 nodes max
            nodesRef.current = workProjects.slice(0, nodeCount).map((project) => {
                const trait = personalityTraits[project.personality] || personalityTraits.analytical;
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * trait.speed * 0.5, // Slower movement
                    vy: (Math.random() - 0.5) * trait.speed * 0.5,
                    radius: trait.size * 0.8, // Smaller nodes
                    color: project.color,
                    pulseRate: trait.pulseRate,
                    pulsePhase: Math.random() * Math.PI * 2,
                    mergeEffect: 0,
                    id: project.id
                };
            });
        };
        initNodes();

        // Throttled animation loop (30 FPS instead of 60)
        const targetFPS = 30;
        const frameInterval = 1000 / targetFPS;

        const animate = (currentTime) => {
            // Throttle to 30 FPS
            if (currentTime - lastFrameTime.current < frameInterval) {
                animationFrameRef.current = requestAnimationFrame(animate);
                return;
            }
            lastFrameTime.current = currentTime;

            // Clear with more opacity for less trail
            ctx.fillStyle = 'rgba(2, 2, 2, 0.2)';
            ctx.fillRect(0, 0, width, height);

            const nodes = nodesRef.current;
            const mouse = mouseRef.current;

            nodes.forEach((node, i) => {
                // Mouse interaction (only when inside container)
                if (mouse.isInside) {
                    const dx = mouse.x - node.x;
                    const dy = mouse.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const interactionRadius = 120;

                    if (dist < interactionRadius && dist > 0) {
                        // Gentle repulsion
                        const force = (interactionRadius - dist) / interactionRadius;
                        node.vx -= (dx / dist) * force * 0.3;
                        node.vy -= (dy / dist) * force * 0.3;
                    }
                }

                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off edges with damping
                if (node.x < 0 || node.x > width) node.vx *= -0.8;
                if (node.y < 0 || node.y > height) node.vy *= -0.8;

                // Keep within bounds
                node.x = Math.max(0, Math.min(width, node.x));
                node.y = Math.max(0, Math.min(height, node.y));

                // Very subtle collision detection
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const dx2 = other.x - node.x;
                    const dy2 = other.y - node.y;
                    const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
                    const minDist = node.radius + other.radius + 30;

                    if (dist2 < minDist) {
                        // Very subtle merge effect
                        node.mergeEffect = Math.min(node.mergeEffect + 0.3, 0.5);
                        other.mergeEffect = Math.min(other.mergeEffect + 0.3, 0.5);

                        // Simple separation (no velocity swap for smoother feel)
                        const overlap = minDist - dist2;
                        const separateX = (dx2 / dist2) * overlap * 0.5;
                        const separateY = (dy2 / dist2) * overlap * 0.5;
                        node.x -= separateX;
                        node.y -= separateY;
                        other.x += separateX;
                        other.y += separateY;
                    }
                }

                // Decay merge effect faster
                if (node.mergeEffect > 0) {
                    node.mergeEffect -= 0.05;
                }

                // Update pulse phase slower
                node.pulsePhase += 0.01 * node.pulseRate;

                // Draw node with subtle effects
                const pulse = Math.sin(node.pulsePhase) * 0.2 + 1;
                const currentRadius = node.radius * pulse;

                // Very subtle merge bloom
                if (node.mergeEffect > 0) {
                    const bloomRadius = currentRadius + node.mergeEffect * 15;
                    const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, bloomRadius);
                    gradient.addColorStop(0, node.color + '40');
                    gradient.addColorStop(0.5, node.color + '20');
                    gradient.addColorStop(1, node.color + '00');
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, bloomRadius, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Subtle node glow
                const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, currentRadius * 2.5);
                glowGradient.addColorStop(0, node.color + '60');
                glowGradient.addColorStop(0.3, node.color + '30');
                glowGradient.addColorStop(1, node.color + '00');
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(node.x, node.y, currentRadius * 2.5, 0, Math.PI * 2);
                ctx.fill();

                // Core node
                ctx.fillStyle = node.color + 'cc';
                ctx.beginPath();
                ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
                ctx.fill();

                // Subtle connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const dx3 = other.x - node.x;
                    const dy3 = other.y - node.y;
                    const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
                    const maxConnectionDist = 180;

                    if (dist3 < maxConnectionDist) {
                        const opacity = (1 - dist3 / maxConnectionDist) * 0.15;
                        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'transparent' }}
            />
        </div>
    );
};
