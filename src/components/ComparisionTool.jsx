import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { workProjects } from '../data/workData';

export const ComparisionTool = ({ selectedIds, onClose, onRemove }) => {

    const selectedProjects = workProjects.filter(p => selectedIds.includes(p.id));

    if (selectedProjects.length === 0) return null;

    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="fixed bottom-0 left-0 right-0 z-[200] bg-[#0a0a0a] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-6 md:p-12 overflow-y-auto max-h-[80vh]"
        >
            <div className="max-w-7xl mx-auto relative">
                <button
                    onClick={onClose}
                    className="absolute -top-6 right-0 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={20} className="text-slate-500 hover:text-white" />
                </button>

                <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                    <span className="text-cyan-500">AGENT</span> COMPARISON
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Attributes Column (Hidden on mobile, mapped inline instead? No, let's keep simple side-by-side) */}

                    {selectedProjects.map((project) => (
                        <div key={project.id} className="relative bg-white/5 border border-white/10 rounded-2xl p-6">
                            <button
                                onClick={() => onRemove(project.id)}
                                className="absolute top-4 right-4 text-slate-500 hover:text-red-500 transition-colors"
                            >
                                <X size={16} />
                            </button>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full" style={{ backgroundColor: project.color }} />
                                <div>
                                    <h4 className="font-bold text-white leading-tight">{project.name}</h4>
                                    <span className="text-xs text-slate-400 uppercase tracking-wider">{project.category}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Personality</p>
                                    <p className="text-white font-mono text-sm capitalize">{project.personality}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Tags</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags?.map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-1 bg-white/10 rounded-full text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Integration</p>
                                    <div className="flex items-center gap-2">
                                        <Check size={14} className="text-emerald-500" />
                                        <span className="text-sm text-slate-300">REST API</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Check size={14} className="text-emerald-500" />
                                        <span className="text-sm text-slate-300">Webhooks</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-cyan-400 transition-colors">
                                        Deploy Agent
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {selectedProjects.length < 3 && (
                        <div className="hidden md:flex items-center justify-center border-2 border-dashed border-white/10 rounded-2xl p-6 min-h-[400px]">
                            <p className="text-slate-600 text-sm text-center">
                                Select another agent<br />to compare
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
