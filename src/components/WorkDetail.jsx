import { motion } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import { AgentSandbox } from './AgentSandbox';
import { useEffect } from 'react';

export const WorkDetail = ({ project, onClose }) => {
    if (!project) return null;

    // Disable body scroll and hide fixed elements when detail page is open
    useEffect(() => {
        // Disable scroll
        document.body.style.overflow = 'hidden';

        // Hide navigation
        const nav = document.querySelector('nav');
        if (nav) nav.style.display = 'none';

        // Hide chat widget
        const chatWidget = document.querySelector('.chat-widget-container');
        if (chatWidget) chatWidget.style.display = 'none';

        return () => {
            // Re-enable scroll
            document.body.style.overflow = 'unset';

            // Show navigation
            if (nav) nav.style.display = 'flex';

            // Show chat widget
            if (chatWidget) chatWidget.style.display = 'block';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black overflow-y-auto"
        >
            <div className="min-h-screen py-12 px-6">
                {/* Close Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onClose}
                    className="fixed top-6 left-6 z-[110] flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-colors group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold">Back</span>
                </motion.button>

                {/* Content Container */}
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-center mb-12 pt-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: project.color }} />
                            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                                {project.sandboxType} Agent
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
                            {project.name}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex items-center justify-center gap-4 mt-8">
                            <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
                            <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-500">
                                Live Demo
                            </span>
                            <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
                        </div>
                    </motion.div>

                    {/* 60/40 Split Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
                    >
                        {/* Left Column - Demo Video (60%) */}
                        <div className="lg:col-span-3">
                            <div className="relative aspect-video bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group">
                                {/* Video Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">
                                    <div className="text-center">
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                opacity: [0.5, 1, 0.5]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'easeInOut'
                                            }}
                                            className="text-8xl mb-4"
                                        >
                                            ▶️
                                        </motion.div>
                                        <p className="text-slate-500 text-sm font-mono">
                                            Demo video: {project.video}
                                        </p>
                                        <p className="text-slate-600 text-xs mt-2">
                                            Replace with actual video element
                                        </p>
                                    </div>
                                </div>

                                {/* Uncomment when you have actual videos:
                <video
                  src={project.video}
                  controls
                  className="w-full h-full object-cover"
                  poster={project.image}
                />
                */}

                                {/* Glow Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    style={{
                                        boxShadow: `inset 0 0 100px ${project.color}20`
                                    }}
                                />
                            </div>

                            {/* Video Info */}
                            <div className="mt-4 flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span>Live Demo Active</span>
                                </div>
                                <div className="text-slate-600 font-mono text-xs">
                                    Resolution: 1920x1080
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Agent Sandbox (40%) */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="sticky top-6"
                            >
                                <div className="mb-4">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
                                        Interactive Sandbox
                                    </h3>
                                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                                </div>

                                <div className="h-[600px]">
                                    <AgentSandbox project={project} />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Additional Info Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                            <div className="text-3xl mb-3">⚡</div>
                            <h4 className="text-lg font-bold text-white mb-2">Performance</h4>
                            <p className="text-sm text-slate-400">
                                Optimized for speed with 99.9% uptime and sub-second response times.
                            </p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                            <div className="text-3xl mb-3">🔒</div>
                            <h4 className="text-lg font-bold text-white mb-2">Security</h4>
                            <p className="text-sm text-slate-400">
                                Enterprise-grade encryption and compliance with industry standards.
                            </p>
                        </div>

                        <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                            <div className="text-3xl mb-3">🔧</div>
                            <h4 className="text-lg font-bold text-white mb-2">Customizable</h4>
                            <p className="text-sm text-slate-400">
                                Fully configurable to match your specific workflow requirements.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
