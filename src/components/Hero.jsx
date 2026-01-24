import { useRef, useState, useEffect } from "react";

import { motion, useMotionValue } from "framer-motion";
import ParallaxSection from './ParallaxSection';

// Matrix raining characters effect background
const MatrixBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 mix-blend-overlay" />

            {/* Moving Grid Floor */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    background: `linear-gradient(transparent 95%, #22d3ee 95%),
                    linear-gradient(90deg, transparent 95%, #22d3ee 95%)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)',
                    opacity: 0.1,
                    maskImage: 'linear-gradient(to bottom, transparent, white)'
                }}
            >
                <motion.div
                    animate={{ y: [0, 40] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

const ScrambleText = ({ text, className }) => {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@#$%^&*";

    useEffect(() => {
        let interval;
        let iteration = 0;

        const scramble = () => {
            interval = setInterval(() => {
                setDisplay(prev => text.split("").map((letter, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join(""));

                if (iteration >= text.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        };

        scramble();
        // Re-scramble every few seconds for a "live" feel
        const loop = setInterval(() => {
            iteration = 0;
            scramble();
        }, 5000);

        return () => {
            clearInterval(interval);
            clearInterval(loop);
        };
    }, [text]);

    return <span className={className}>{display}</span>;
};

export const Hero = ({ setIsBookingOpen }) => {
    const containerRef = useRef(null);

    // Mouse interaction for 3D Tilt
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 bg-transparent perspective-1000"
        >
            <ParallaxSection offset={-50} className="absolute inset-0">
                <MatrixBackground />
            </ParallaxSection>

            {/* Floating Orbs */}
            <ParallaxSection offset={-100} className="absolute top-1/4 left-1/4 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full mix-blend-screen"
                />
            </ParallaxSection>
            <ParallaxSection offset={50} className="absolute bottom-1/4 right-1/4 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, 50, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"
                />
            </ParallaxSection>

            {/* Main Content with 3D Tilt */}
            <motion.div
                className="relative z-10 text-center max-w-7xl mx-auto mt-20"
                style={{ rotateX: mouseY, rotateY: mouseX }}
            >

                {/* Live Status */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white/[0.03] border border-cyan-500/30 backdrop-blur-xl mb-16 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                >
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></span>
                    </div>
                    <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-cyan-400">
                        Neural Network Active
                    </span>
                </motion.div>

                {/* HEADLINE */}
                <div className="relative mb-16">
                    <h1 className="text-6xl md:text-[150px] leading-[0.8] font-black tracking-tighter select-none mix-blend-screen">
                        <span className="block text-slate-800/50 absolute top-2 left-2 blur-sm transform translate-x-2">AUTOMATE</span>
                        <ScrambleText text="AUTOMATE" className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500" />

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-center gap-4 md:gap-12 w-full"
                        >
                            <span className="text-4xl md:text-[60px] font-light italic text-cyan-500/80 font-mono tracking-widest opacity-80">
                                THE
                            </span>
                            <span className="bg-white text-black px-4 md:px-8 transform -skew-x-12 inline-block">
                                FUTURE
                            </span>
                        </motion.div>
                    </h1>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-400 font-light leading-relaxed mb-20"
                >
                    Constructing autonomous digital architectures for the <span className="text-white font-medium">post-labor economy</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8"
                >
                    <button
                        onClick={() => window.open('https://atherai2026.app.n8n.cloud/form/e7216e1d-645f-4fbc-8df6-5dd4c0318e87', '_blank')}
                        className="group relative w-64 h-16 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] rounded-none hover:bg-cyan-400 transition-all overflow-hidden"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
                    >
                        <div className="absolute inset-0 bg-white/50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out skew-x-12" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            INITIALIZE SYSTEM
                        </span>
                    </button>

                    <button
                        onClick={() => window.location.href = '#architecture'}
                        className="group relative w-64 h-16 border border-white/20 hover:border-cyan-500/50 text-white font-bold uppercase tracking-[0.2em] transition-all bg-black/50 backdrop-blur-sm"
                    >
                        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 text-xs">VIEW ARCHITECTURE</span>
                    </button>
                </motion.div>

            </motion.div>
        </section>
    );
};
