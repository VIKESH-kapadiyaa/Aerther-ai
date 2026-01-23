import React, { useEffect, useRef } from 'react';

const AntigravityBackground = () => {
    const canvasRef = useRef(null);
    // Google Brand Colors: Blue, Red, Yellow, Green
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let time = 0;

        // Configuration
        const particleCount = 400; // ~300-500
        const mouse = { x: -1000, y: -1000 };
        const repulsionRadius = 150;
        const repulsionStrength = 2;
        const friction = 0.95;
        const returnSpeed = 0.05;

        // Resize handling
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor() {
                // Initial distribution: Radial scatter with central void
                const angle = Math.random() * Math.PI * 2;
                // Scatter radius: keep center clear (min radius ~150px or responsive)
                const minRadius = Math.min(canvas.width, canvas.height) * 0.15;
                const maxRadius = Math.max(canvas.width, canvas.height) * 0.6;
                const radius = minRadius + Math.random() * (maxRadius - minRadius);

                this.x = canvas.width / 2 + Math.cos(angle) * radius;
                this.y = canvas.height / 2 + Math.sin(angle) * radius;

                // Store original position for "floating back" tendency (optional, or just drift)
                this.originX = this.x;
                this.originY = this.y;

                this.vx = 0;
                this.vy = 0;

                // Random triangle properties
                this.size = Math.random() * 8 + 4; // 4-12px
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.05;

                // Random jitter offset (phase)
                this.jitterPhase = Math.random() * Math.PI * 2;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.fillStyle = this.color;

                // Draw Triangle
                ctx.beginPath();
                ctx.moveTo(0, -this.size / 2);
                ctx.lineTo(this.size / 2, this.size / 2);
                ctx.lineTo(-this.size / 2, this.size / 2);
                ctx.closePath();
                ctx.fill();

                ctx.restore();
            }

            update() {
                // 1. Idle Behavior: Jitter & Pulse
                // Pulse: Global expansion/contraction
                const pulse = Math.sin(time * 0.02) * 0.5; // Slowly oscillate

                // Jitter: Individual vibration
                const jitterX = Math.sin(time * 0.1 + this.jitterPhase) * 0.2;
                const jitterY = Math.cos(time * 0.1 + this.jitterPhase) * 0.2;

                // 2. Mouse Interaction: Repulsion
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < repulsionRadius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (repulsionRadius - distance) / repulsionRadius;

                    // Apply force
                    this.vx += forceDirectionX * force * repulsionStrength;
                    this.vy += forceDirectionY * force * repulsionStrength;
                }

                // 3. Physics: Friction & Movement
                this.vx *= friction;
                this.vy *= friction;

                // Apply velocity
                this.x += this.vx;
                this.y += this.vy;

                // Drift/Idle movement applied directly to position
                this.x += jitterX + (this.x - canvas.width / 2) * pulse * 0.001;
                this.y += jitterY + (this.y - canvas.height / 2) * pulse * 0.001;

                // Rotate slowly
                this.rotation += this.rotationSpeed;
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // To create trails or specialized background clear:
            // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
            // ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            time++;
            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        // Initial setup
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: 'transparent' }} // Let main CSS handle main background color if needed, or set #020202 here
        />
    );
};

export default AntigravityBackground;
