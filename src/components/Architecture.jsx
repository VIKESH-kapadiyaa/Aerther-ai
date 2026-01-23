import { motion } from "framer-motion";

const ArchitectureNode = ({ title, icon, position, delay, color = "cyan" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5, type: "spring" }}
        animate={{
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
            }
        }}
        className={`absolute ${position} w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center bg-black border border-${color}-500/30 rounded-full backdrop-blur-md z-10 shadow-[0_0_50px_rgba(34,211,238,0.15)] group hover:border-${color}-400 transition-colors`}
    >
        <div className="text-4xl mb-3 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">{icon}</div>
        <div className={`text-xs font-bold uppercase tracking-widest text-${color}-400 text-center px-2 group-hover:text-white transition-colors`}>{title}</div>

        {/* Orbiting Ring - Outer */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-[-10%] border-t border-l border-${color}-500/30 rounded-full`}
        />
        {/* Orbiting Ring - Inner Reverse */}
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-[-5%] border-b border-r border-${color}-500/20 rounded-full`}
        />
    </motion.div>
);

const DataStream = ({ path, delay = 0, duration = 3 }) => (
    <motion.path
        d={path}
        stroke="none"
        fill="none"
    >
        {/* We use a motion value to drive a gradient or circle along the path? 
            Since SVG path animation is tricky with just framer-motion for "moving dot" without complex setup,
            we will use stroke-dasharray trick or look for a simpler "Beam" effect.
            
            Simpler: Duplicate the path, make it white/cyan, and animate strokeDashoffset.
        */}
    </motion.path>
);

// Animated line that "flows"
const FlowLine = ({ d, delay }) => {
    return (
        <>
            {/* Background Dim Line */}
            <path d={d} stroke="rgba(34, 211, 238, 0.1)" strokeWidth="2" fill="none" />

            {/* Moving Pulse */}
            <motion.path
                d={d}
                stroke="#22d3ee"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10 200" // Short dash, long gap
                strokeLinecap="round"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -210 }} // Move by total length of pattern
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: delay }}
            />
        </>
    );
};


export const Architecture = () => {
    return (
        <section className="py-40 bg-[#020202] relative overflow-hidden" id="architecture">

            {/* Background Grid - Parallax feel */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-20">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-6"
                >
                    NEURAL <span className="text-cyan-500">FLOW</span>
                </motion.h2>
                <div className="flex items-center justify-center gap-4">
                    <span className="h-px w-12 bg-cyan-500/50" />
                    <p className="text-cyan-500 font-mono uppercase tracking-[0.3em] text-xs">
                        Autonomous Logic Processing
                    </p>
                    <span className="h-px w-12 bg-cyan-500/50" />
                </div>
            </div>

            {/* Diagram Container */}
            <div className="relative h-[600px] md:h-[900px] max-w-7xl mx-auto flex items-center justify-center perspective-1000">

                {/* Central Core (The Brain) */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="relative w-64 h-64 md:w-96 md:h-96 z-20 group"
                >
                    {/* Core Sphere */}
                    <div className="absolute inset-0 bg-black border border-cyan-500/50 rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(34,211,238,0.2)]">

                        {/* Spinning Reactor Rings */}
                        <div className="absolute inset-2 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Inner Gradient */}
                        <div className="absolute inset-0 bg-radial-gradient from-cyan-900/40 to-transparent opacity-50" />

                        <div className="text-center relative z-10 mix-blend-screen">
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2"
                            >
                                CORE
                            </motion.div>
                            <div className="text-[10px] font-mono text-cyan-400 tracking-[0.5em] bg-black/50 px-2 py-1 rounded">SYSTEM.LOGIC</div>
                        </div>
                    </div>

                    {/* Shockwaves */}
                    <motion.div
                        animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 border border-cyan-500/50 rounded-full"
                    />
                </motion.div>

                {/* --- SATELLITE NODES --- */}

                {/* 1. INPUT (Left) */}
                <ArchitectureNode
                    title="Ingestion"
                    icon="📥"
                    position="left-4 top-20 md:left-10 md:top-1/3"
                    delay={0.2}
                    color="cyan"
                />

                {/* 2. MEMORY (Top) */}
                <ArchitectureNode
                    title="Vector DB"
                    icon="🧠"
                    position="top-10 left-1/2 -translate-x-1/2"
                    delay={0.4}
                    color="purple"
                />

                {/* 3. HISTORY (Bottom) */}
                <ArchitectureNode
                    title="Context"
                    icon="📂"
                    position="bottom-10 left-1/2 -translate-x-1/2"
                    delay={0.5}
                    color="blue"
                />

                {/* 4. EXECUTION (Right) */}
                <ArchitectureNode
                    title="Action"
                    icon="⚡"
                    position="right-4 bottom-20 md:right-10 md:bottom-1/3"
                    delay={0.6}
                    color="green"
                />

                {/* --- CONNECTING CABLES (SVG Layer) --- */}
                {/* 
                    Coordinates are approximated based on container size (assuming ~1200px width, 900px height center)
                    Center ~ (600, 450)
                    Left Node ~ (100, 300)
                    Top Node ~ (600, 100)
                    Bottom Node ~ (600, 800)
                    Right Node ~ (1100, 600)
                    
                    We need responsive-ish coordinates. 
                    Actually, relying on fixed SVG paths in a responsive div is minimal. 
                    Better to use absolute positioning or a simple localized SVG viewbox.
                    Let's use a full-size absolute SVG with percentage based paths for rough responsiveness.
                 */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60 overflow-visible">
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                            <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* SVG paths commented out due to percentage coordinate errors */}
                    {/* Percentages don't work in SVG path d attributes - would need actual coordinates */}

                </svg>

            </div>
        </section>
    );
};
