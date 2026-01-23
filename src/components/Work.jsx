import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkCard } from './WorkCard';
import { PokerDeck } from './PokerDeck';
import { WorkDetail } from './WorkDetail';
import { workProjects } from '../data/workData';

export const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile viewport
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSelectProject = (project) => {
        setSelectedProject(project);
    };

    const handleCloseDetail = () => {
        setSelectedProject(null);
    };

    return (
        <section className="relative min-h-screen py-20 bg-[#0a0a0f] overflow-hidden" id="work">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />

            {/* Main Content */}
            <div className="relative z-10">
                <AnimatePresence mode="wait">
                    {!selectedProject ? (
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Heading */}
                            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-full mb-8 backdrop-blur-sm"
                                >
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse" />
                                    <span className="text-xs font-mono uppercase tracking-widest bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                        AI Agent Portfolio
                                    </span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.6 }}
                                    className="text-6xl md:text-9xl font-black tracking-tighter mb-6"
                                >
                                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                        WORK
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
                                >
                                    Cutting-edge AI agents powering the future of automation
                                </motion.p>

                                <div className="flex items-center justify-center gap-4 mt-8">
                                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
                                    <span className="text-xs font-mono uppercase tracking-[0.3em] bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                        {workProjects.length} Active Agents
                                    </span>
                                    <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
                                </div>
                            </div>

                            {/* Desktop Grid / Mobile Poker Deck */}
                            <div className="max-w-7xl mx-auto px-6">
                                {isMobile ? (
                                    // Mobile: Poker Deck
                                    <PokerDeck
                                        projects={workProjects}
                                        onSelectProject={handleSelectProject}
                                    />
                                ) : (
                                    // Desktop: Grid
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {workProjects.map((project, index) => (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <WorkCard
                                                    project={project}
                                                    onClick={handleSelectProject}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        // Detail View
                        <WorkDetail
                            key="detail"
                            project={selectedProject}
                            onClose={handleCloseDetail}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
