import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Activity, Cpu, Database, Globe } from 'lucide-react';

const SineWave = ({ color }) => (
    <div className="flex items-end gap-[1px] h-12 w-full overflow-hidden opacity-50">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                animate={{ height: ["20%", "80%", "20%"] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1
                }}
                className="w-1 rounded-t-sm"
                style={{ backgroundColor: color }}
            />
        ))}
    </div>
);

export const StatusDashboard = ({ onClose }) => {
    const [stats, setStats] = useState({
        cpu: 45,
        memory: 62,
        requests: 1240,
        latency: 24
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                cpu: Math.min(100, Math.max(20, prev.cpu + (Math.random() - 0.5) * 10)),
                memory: Math.min(100, Math.max(40, prev.memory + (Math.random() - 0.5) * 5)),
                requests: prev.requests + Math.floor(Math.random() * 10),
                latency: Math.max(10, prev.latency + (Math.random() - 0.5) * 4)
            }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
        >
            <div className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                >
                    <X className="text-white" size={24} />
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-12 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <h2 className="text-2xl font-mono font-bold text-white tracking-widest uppercase">
                        System Status <span className="text-slate-600">::</span> <span className="text-cyan-500">Online</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <Cpu size={20} className="text-purple-500" />
                            <span className="text-xs font-mono text-slate-500">CPU LOAD</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">{Math.floor(stats.cpu)}%</div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-purple-500"
                                animate={{ width: `${stats.cpu}%` }}
                            />
                        </div>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <Database size={20} className="text-cyan-500" />
                            <span className="text-xs font-mono text-slate-500">MEMORY</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">{Math.floor(stats.memory)}%</div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-cyan-500"
                                animate={{ width: `${stats.memory}%` }}
                            />
                        </div>
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <Globe size={20} className="text-emerald-500" />
                            <span className="text-xs font-mono text-slate-500">RPS</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">{stats.requests}</div>
                        <SineWave color="#10b981" />
                    </div>

                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <Activity size={20} className="text-pink-500" />
                            <span className="text-xs font-mono text-slate-500">LATENCY</span>
                        </div>
                        <div className="text-4xl font-black text-white mb-2">{Math.floor(stats.latency)}ms</div>
                        <SineWave color="#ec4899" />
                    </div>
                </div>

                {/* World Map / Log Placeholder */}
                <div className="relative h-64 bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center mix-blend-overlay" />

                    <div className="relative z-10 flex flex-col gap-2 font-mono text-xs text-green-400">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: [0, 1, 0.5] }}
                                transition={{ delay: i * 0.5, repeat: Infinity, repeatDelay: 4 }}
                                className="flex gap-4"
                            >
                                <span className="text-slate-500">[{new Date().toLocaleTimeString()}]</span>
                                <span>Agent_{Math.floor(Math.random() * 100)} initialized task sequence from {['US-EAST', 'EU-WEST', 'ASIA-PACIFIC'][Math.floor(Math.random() * 3)]}...</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
