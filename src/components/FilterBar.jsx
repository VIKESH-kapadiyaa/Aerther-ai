import { motion } from 'framer-motion';

const filterTypes = [
    { id: 'all', label: 'All', icon: '🎯' },
    { id: 'terminal', label: 'Terminal', icon: '⌨️' },
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'iframe', label: 'Web', icon: '🌐' }
];

export const FilterBar = ({ activeFilter, onFilterChange, projects }) => {
    // Count projects by type
    const getCounts = () => {
        const counts = {
            all: projects.length,
            terminal: projects.filter(p => p.sandboxType === 'terminal').length,
            chat: projects.filter(p => p.sandboxType === 'chat').length,
            iframe: projects.filter(p => p.sandboxType === 'iframe').length
        };
        return counts;
    };

    const counts = getCounts();

    return (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filterTypes.map((filter) => {
                const isActive = activeFilter === filter.id;
                const count = counts[filter.id];

                return (
                    <motion.button
                        key={filter.id}
                        onClick={() => onFilterChange(filter.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
              relative px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest
              transition-all duration-300 overflow-hidden
              ${isActive
                                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/30'
                                : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
                            }
            `}
                    >
                        {/* Shimmer effect on active */}
                        {isActive && (
                            <motion.div
                                animate={{ x: ['0%', '200%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                            <span className="text-lg">{filter.icon}</span>
                            {filter.label}
                            <span className={`
                ml-2 px-2 py-0.5 rounded-full text-xs font-bold
                ${isActive
                                    ? 'bg-white/20 text-white'
                                    : 'bg-white/5 text-slate-500'
                                }
              `}>
                                {count}
                            </span>
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
};
