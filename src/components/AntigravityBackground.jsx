import React, { useEffect, useRef } from 'react';

const AntigravityBackground = () => {
    const canvasRef = useRef(null);
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // State
        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const lastMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let mouseSpeed = 0;

        // Configuration
        const particleCount = 190;
        const blobRadius = 100;
        const ease = 0.12;

        // Tail Configuration
        const tailLength = 8;
        const tailGravity = 3; // Pixels down per frame of lag

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;

                this.history = []; // For trail

                this.angle = Math.random() * Math.PI * 2;
                this.orbitRadius = Math.sqrt(Math.random()) * blobRadius;
                this.orbitSpeed = (Math.random() - 0.5) * 0.02;

                this.size = Math.random() * 8 + 4;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.1;
                this.visible = true;
            }

            draw() {
                // DRAW TAIL
                if (this.history.length > 2) {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y);
                    for (let i = 0; i < this.history.length; i++) {
                        const point = this.history[i];
                        // "Falling" effect: larger Y offset for older points
                        const fallOffset = i * tailGravity;
                        ctx.lineTo(point.x, point.y + fallOffset);
                    }
                    // Tail Style
                    ctx.strokeStyle = this.color;
                    ctx.globalAlpha = 0.7; // More visible
                    ctx.lineWidth = 2; // Thicker
                    ctx.stroke();
                    ctx.globalAlpha = 1.0; // Reset
                }

                ctx.setTransform(Math.cos(this.rotation), Math.sin(this.rotation), -Math.sin(this.rotation), Math.cos(this.rotation), this.x, this.y);
                ctx.fillStyle = this.color;

                ctx.beginPath();
                ctx.moveTo(0, -this.size / 2);
                ctx.lineTo(this.size / 2, this.size / 2);
                ctx.lineTo(-this.size / 2, this.size / 2);
                ctx.closePath();
                ctx.fill();
            }

            update(time) {
                // Update History (unshift new position)
                this.history.unshift({ x: this.x, y: this.y });
                if (this.history.length > tailLength) {
                    this.history.pop();
                }

                // MODE: PURE ROTATING CURSOR BLOB
                this.angle += this.orbitSpeed;

                const isStationary = mouseSpeed < 2;
                const pulse = isStationary ? (1 + Math.sin(time * 0.04) * 0.05) : 1;

                const targetX = mouse.x + Math.cos(this.angle) * this.orbitRadius * pulse;
                const targetY = mouse.y + Math.sin(this.angle) * this.orbitRadius * pulse;

                // LERP
                this.x += (targetX - this.x) * ease;
                this.y += (targetY - this.y) * ease;

                this.rotation += this.rotationSpeed;
            }
        }

        let particles = [];
        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        let time = 0;
        const animate = () => {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear screen

            const dx = mouse.x - lastMouse.x;
            const dy = mouse.y - lastMouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            mouseSpeed = mouseSpeed * 0.8 + dist * 0.2;
            lastMouse.x = mouse.x;
            lastMouse.y = mouse.y;

            particles.forEach(p => {
                p.update(time);
                p.draw();
            });

            time++;
            animationFrameId = requestAnimationFrame(animate);
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        // EVENT LISTENERS
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none mix-blend-screen"
            style={{
                zIndex: 9999
            }}
        />
    );
};

export default AntigravityBackground;
