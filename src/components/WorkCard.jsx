import { motion } from 'framer-motion';

export const WorkCard = ({ project, onClick }) => {
    // Color mapping for vibrant gradients
    const getGradient = (color) => {
        const gradients = {
            '#22d3ee': 'from-cyan-500 to-blue-500',
            '#a78bfa': 'from-purple-500 to-pink-500',
            '#10b981': 'from-emerald-500 to-teal-500',
            '#f59e0b': 'from-amber-500 to-orange-500',
            '#ec4899': 'from-pink-500 to-rose-500',
            '#3b82f6': 'from-blue-500 to-indigo-500',
        };
        return gradients[color] || 'from-purple-500 to-cyan-500';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover="hover"
            className="group relative rounded-3xl overflow-hidden cursor-pointer h-full"
            onClick={() => onClick(project)}
        >
            {/* Vibrant Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.color)} opacity-10`} />

            {/* Glassmorphism Card */}
            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-purple-500/20">

                {/* Animated Gradient Border */}
                <motion.div
                    variants={{
                        hover: { opacity: 1 }
                    }}
                    initial={{ opacity: 0 }}
                    className="absolute inset-0 rounded-3xl p-[1px] pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, ${project.color}80, transparent, ${project.color}40)`
                    }}
                />

                {/* Content Container */}
                <div className="relative h-full flex flex-col p-6">

                    {/* Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                        <div className={`px-3 py-1.5 bg-gradient-to-r ${getGradient(project.color)} rounded-full`}>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                                {project.sandboxType}
                            </span>
                        </div>

                        {/* Active Status */}
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-emerald-500/30 rounded-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-mono text-emerald-400">LIVE</span>
                        </div>
                    </div>

                    {/* Icon/Visual */}
                    <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/50 to-black/50 flex items-center justify-center border border-white/5">
                        <motion.div
                            variants={{
                                hover: { scale: 1.2, rotate: 5 }
                            }}
                            transition={{ duration: 0.4 }}
                            className="text-8xl opacity-80"
                            style={{
                                filter: `drop-shadow(0 0 20px ${project.color}60)`
                            }}
                        >
                            {project.sandboxType === 'chat' ? '💬' : project.sandboxType === 'terminal' ? '⌨️' : '🌐'}
                        </motion.div>

                        {/* Animated Glow */}
                        <motion.div
                            variants={{
                                hover: { opacity: 0.6, scale: 1.5 }
                            }}
                            initial={{ opacity: 0 }}
                            className="absolute inset-0 rounded-2xl"
                            style={{
                                background: `radial-gradient(circle at center, ${project.color}40, transparent 70%)`
                            }}
                        />
                    </div>

                    {/* Project Name */}
                    <motion.h3
                        variants={{
                            hover: { x: 4 }
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="text-2xl font-black tracking-tight text-white mb-3 line-clamp-2"
                    >
                        {project.name}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
                        {project.description}
                    </p>

                    {/* Explore Button */}
                    <motion.button
                        variants={{
                            hover: { scale: 1.05, y: -4 }
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className={`w-full relative py-4 bg-gradient-to-r ${getGradient(project.color)} rounded-2xl overflow-hidden shadow-lg group/btn`}
                        style={{
                            boxShadow: `0 10px 40px ${project.color}40`
                        }}
                    >
                        {/* Shimmer Effect */}
                        <motion.div
                            variants={{
                                hover: { x: '200%' }
                            }}
                            initial={{ x: '-100%' }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />

                        <span className="relative z-10 flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs text-white">
                            Explore Agent
                            <motion.span
                                variants={{
                                    hover: { x: 4 }
                                }}
                                className="text-lg"
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};
