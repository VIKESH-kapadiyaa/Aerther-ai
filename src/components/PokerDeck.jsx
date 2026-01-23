import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PokerDeck = ({ projects, onSelectProject }) => {
    const [cards, setCards] = useState(projects);
    const [exitDirection, setExitDirection] = useState(0);

    const handleDragEnd = (event, info, project) => {
        const swipeThreshold = 100;
        const swipePower = Math.abs(info.offset.x);

        if (swipePower > swipeThreshold) {
            // Card swiped away
            setExitDirection(info.offset.x > 0 ? 1 : -1);
            setCards(prev => prev.filter(p => p.id !== project.id));
        }
    };

    const handleCardClick = (project) => {
        onSelectProject(project);
    };

    return (
        <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
                {cards.map((project, index) => {
                    const isTop = index === cards.length - 1;
                    const rotation = (index - Math.floor(cards.length / 2)) * 3;
                    const yOffset = index * -2;
                    const scale = 1 - (cards.length - 1 - index) * 0.05;

                    return (
                        <motion.div
                            key={project.id}
                            drag={isTop ? 'x' : false}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={0.7}
                            onDragEnd={(e, info) => handleDragEnd(e, info, project)}
                            onClick={() => isTop && handleCardClick(project)}
                            initial={{
                                scale: 0,
                                rotate: rotation,
                                y: yOffset,
                                opacity: 0
                            }}
                            animate={{
                                scale: scale,
                                rotate: rotation,
                                y: yOffset,
                                opacity: 1,
                                zIndex: index
                            }}
                            exit={{
                                x: exitDirection * 300,
                                rotate: exitDirection * 20,
                                opacity: 0,
                                transition: { duration: 0.3 }
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30
                            }}
                            className={`absolute w-80 bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl ${isTop ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
                                }`}
                            style={{
                                boxShadow: `0 10px 40px ${project.color}30`
                            }}
                        >
                            {/* Card Content */}
                            <div className="p-6">
                                {/* Project Name */}
                                <h3 className="text-2xl font-black tracking-tight text-white mb-3">
                                    {project.name}
                                </h3>

                                {/* Preview Image */}
                                <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 mb-4">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                                        <div className="text-6xl opacity-20">
                                            {project.sandboxType === 'chat' ? '💬' : project.sandboxType === 'terminal' ? '⌨️' : '🌐'}
                                        </div>
                                    </div>

                                    {/* Type Badge */}
                                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full">
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400">
                                            {project.sandboxType}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Try Now Button */}
                                <button
                                    className="w-full py-3 bg-white text-black font-black uppercase tracking-widest text-xs rounded-lg"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.color}, white)`
                                    }}
                                >
                                    Tap to Explore
                                </button>
                            </div>

                            {/* Swipe Indicator (only on top card) */}
                            {isTop && (
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-40">
                                    <div className="text-xs font-mono">← Swipe →</div>
                                </div>
                            )}

                            {/* Card Number Indicator */}
                            <div className="absolute top-3 left-3 w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-white">{cards.length - index}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>

            {/* All cards swiped message */}
            {cards.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <div className="text-4xl mb-4">🎉</div>
                    <p className="text-xl font-bold text-white mb-2">All Agents Explored!</p>
                    <button
                        onClick={() => setCards(projects)}
                        className="px-6 py-3 bg-cyan-500 text-black font-black uppercase tracking-widest text-xs rounded-lg hover:bg-cyan-400 transition-colors"
                    >
                        Reset Deck
                    </button>
                </motion.div>
            )}
        </div>
    );
};
