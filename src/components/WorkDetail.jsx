import { motion } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import { AgentSandbox } from './AgentSandbox';
import { useEffect, useMemo } from 'react';
import { SEO } from './SEO';
import { workProjects } from '../data/workData';
import { WorkCard } from './WorkCard';
import { Agent3D } from './Agent3D';

export const WorkDetail = ({ project, onClose, onSwitchProject }) => {
    if (!project) return null;

    // Find related projects based on category or random fallback
    const relatedProjects = useMemo(() => {
        let related = workProjects.filter(p => p.id !== project.id && p.category === project.category);

        // If not enough related projects by category, fill with random others
        if (related.length < 2) {
            const others = workProjects.filter(p => p.id !== project.id && p.category !== project.category);
            related = [...related, ...others].slice(0, 3);
        } else {
            related = related.slice(0, 3);
        }
        return related;
    }, [project]);

    // Disable body scroll and hide fixed elements when detail page is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const nav = document.querySelector('nav');
        if (nav) nav.style.display = 'none';
        const chatWidget = document.querySelector('.chat-widget-container');
        if (chatWidget) chatWidget.style.display = 'none';

        return () => {
            document.body.style.overflow = 'unset';
            if (nav) nav.style.display = 'flex';
            if (chatWidget) chatWidget.style.display = 'block';
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
        >
            <SEO
                title={project.name}
                description={project.description}
                image={project.image}
                url={`https://aether-ai.com/work/${project.id}`}
                type="article"
            />
            <div className="min-h-screen py-12 px-6">
                {/* Close Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={onClose}
                    className="fixed top-6 left-6 z-[110] flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-colors group focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    aria-label="Back to projects"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold">Back</span>
                </motion.button>

                {/* Content Container */}
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12 pt-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6"
                        >
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color }} />
                            <span className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: project.color }}>
                                {project.personality} Intelligence
                            </span>
                        </motion.div>
                        <motion.h1
                            id="project-title"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white mb-6"
                        >
                            {project.name}
                        </motion.h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* 60/40 Split Layout */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
                    >
                        {/* Left Column - 3D/Media (60%) */}
                        <div className="lg:col-span-3">
                            {/* 3D Visualization */}
                            <div className="relative aspect-video bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden mb-8 shadow-2xl group">
                                <div className="absolute inset-0 z-0">
                                    <Agent3D color={project.color} />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent pointer-events-none">
                                    <p className="text-white/50 text-xs font-mono mb-2">RENDER MODE: REALTIME</p>
                                </div>
                            </div>

                            {/* Social Sharing */}
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 border-b border-white/10 pb-8 gap-4">
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => {
                                            const text = `Check out ${project.name} by Aether AI: https://aether-ai.com/work/${project.id}`;
                                            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
                                        }}
                                        className="px-4 py-2 bg-white/5 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] border border-white/10 rounded-full text-xs font-bold uppercase transition-colors"
                                    >
                                        Share on X
                                    </button>
                                    <button
                                        onClick={() => {
                                            const url = `https://aether-ai.com/work/${project.id}`;
                                            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                                        }}
                                        className="px-4 py-2 bg-white/5 hover:bg-[#0077b5]/20 hover:text-[#0077b5] border border-white/10 rounded-full text-xs font-bold uppercase transition-colors"
                                    >
                                        LinkedIn
                                    </button>
                                </div>
                                <button
                                    className="text-xs font-mono text-slate-500 hover:text-white transition-colors"
                                    onClick={() => {
                                        navigator.clipboard.writeText(`https://aether-ai.com/work/${project.id}`);
                                        alert('Link copied to clipboard!');
                                    }}
                                >
                                    COPY LINK
                                </button>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="text-3xl mb-3">⚡</div>
                                    <h4 className="text-lg font-bold text-white mb-2">Performance</h4>
                                    <p className="text-sm text-slate-400">99.9% uptime with sub-second response times.</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="text-3xl mb-3">🔒</div>
                                    <h4 className="text-lg font-bold text-white mb-2">Security</h4>
                                    <p className="text-sm text-slate-400">Enterprise-grade encryption and privacy.</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="text-3xl mb-3">🔧</div>
                                    <h4 className="text-lg font-bold text-white mb-2">Customizable</h4>
                                    <p className="text-sm text-slate-400">Fully configurable to your workflow.</p>
                                </div>
                            </div>

                            {/* Related Projects */}
                            <div className="mt-20 border-t border-white/10 pt-16">
                                <h3 className="text-2xl font-black text-white mb-8">Related Agents</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedProjects.map((related) => (
                                        <div key={related.id} className="h-80">
                                            <WorkCard
                                                project={related}
                                                onClick={(p) => {
                                                    const detailContainer = document.querySelector('.overflow-y-auto');
                                                    if (detailContainer) detailContainer.scrollTo({ top: 0, behavior: 'smooth' });
                                                    if (onSwitchProject) onSwitchProject(p);
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sandbox (40%) */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-6">
                                <div className="mb-4">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Interactive Sandbox</h3>
                                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                                </div>
                                <div className="h-[600px]">
                                    <AgentSandbox project={project} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};
