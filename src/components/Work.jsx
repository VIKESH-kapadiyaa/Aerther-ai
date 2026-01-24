import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkCard } from './WorkCard';
import { PokerDeck } from './PokerDeck';
import { ComparisionTool } from './ComparisionTool';
// import { WorkDetail } from './WorkDetail';
import { workProjects } from '../data/workData';
import ParallaxSection from './ParallaxSection';
import { DetailLoader } from './DetailLoader';

// Lazy Load Detail View
const WorkDetail = lazy(() => import("./WorkDetail").then(module => ({ default: module.WorkDetail })));

export const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isDetailLoading, setIsDetailLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [compareList, setCompareList] = useState([]); // List of IDs

    const categories = ['All', ...new Set(workProjects.map(p => p.category).filter(Boolean))];

    const toggleCompare = (e, id) => {
        e.stopPropagation();
        setCompareList(prev => {
            if (prev.includes(id)) return prev.filter(item => item !== id);
            if (prev.length >= 3) {
                alert("You can compare up to 3 agents.");
                return prev;
            }
            return [...prev, id];
        });
    };

    const filteredProjects = workProjects.filter(project => {
        const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

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
        setIsDetailLoading(true);
        setTimeout(() => {
            setSelectedProject(project);
            setIsDetailLoading(false);
        }, 800);
    };

    const handleCloseDetail = () => {
        setSelectedProject(null);
    };

    return (
        <section className="relative min-h-screen py-20 bg-transparent overflow-hidden px-6 z-20" id="work">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 overflow-hidden">
                <ParallaxSection offset={100} className="absolute top-0 left-1/4">
                    <div className="w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                </ParallaxSection>
                <ParallaxSection offset={-150} className="absolute bottom-0 right-1/4">
                    <div className="w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
                </ParallaxSection>
                <ParallaxSection offset={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                </ParallaxSection>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

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
                                        {filteredProjects.length} Active Agents
                                    </span>
                                    <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
                                </div>

                                {/* Filters & Search */}
                                <div className="mt-12 mb-8 flex flex-col md:flex-row items-center justify-center gap-6">
                                    {/* Categories */}
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {categories.map(category => (
                                            <button
                                                key={category}
                                                onClick={() => setSelectedCategory(category)}
                                                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${selectedCategory === category
                                                    ? 'bg-white text-black shadow-lg shadow-purple-500/20'
                                                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
                                                    }`}
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Search Bar */}
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="text"
                                            placeholder="Search agents..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2 pl-10 text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all placeholder:text-slate-600"
                                        />
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                                            🔍
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Grid / Mobile Poker Deck */}
                            <div className="max-w-7xl mx-auto px-6">
                                {isMobile ? (
                                    // Mobile: Poker Deck
                                    <PokerDeck
                                        projects={filteredProjects}
                                        onSelectProject={handleSelectProject}
                                    />
                                ) : (
                                    // Desktop: Grid
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <AnimatePresence mode="popLayout">
                                            {filteredProjects.length > 0 ? (
                                                filteredProjects.map((project, index) => (
                                                    <motion.div
                                                        key={project.id}
                                                        layout
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.9 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="relative group"
                                                    >
                                                        {/* Comparison Checkbox Overlay */}
                                                        <div className="absolute top-4 left-4 z-20">
                                                            <button
                                                                onClick={(e) => toggleCompare(e, project.id)}
                                                                className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md transition-all ${compareList.includes(project.id)
                                                                        ? 'bg-cyan-500 border-cyan-500 text-black'
                                                                        : 'bg-black/40 text-transparent hover:bg-black/60 hover:text-white/50'
                                                                    }`}
                                                            >
                                                                {compareList.includes(project.id) ? '✓' : '+'}
                                                            </button>
                                                        </div>

                                                        <WorkCard
                                                            project={project}
                                                            onClick={handleSelectProject}
                                                        />
                                                    </motion.div>
                                                ))
                                            ) : (
                                                <div className="col-span-3 text-center py-20 text-slate-500">
                                                    No agents found matching your query.
                                                </div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        // Detail View
                        <Suspense fallback={<DetailLoader />}>
                            <WorkDetail
                                key="detail"
                                project={selectedProject}
                                onClose={handleCloseDetail}
                                onSwitchProject={handleSelectProject}
                            />
                        </Suspense>
                    )}
                </AnimatePresence>



                <AnimatePresence>
                    {/* Comparison Tool Drawer */}
                    {compareList.length > 0 && !selectedProject && (
                        <ComparisionTool
                            selectedIds={compareList}
                            onClose={() => setCompareList([])}
                            onRemove={(id) => setCompareList(prev => prev.filter(p => p !== id))}
                        />
                    )}

                    {isDetailLoading && <DetailLoader />}
                </AnimatePresence>
            </div >
        </section >
    );
};
