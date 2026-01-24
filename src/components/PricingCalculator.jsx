import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PricingCalculator = () => {
    const [agents, setAgents] = useState(1);
    const [tasks, setTasks] = useState(100);
    const [storage, setStorage] = useState(50);

    const basePrice = 49;
    const taskPrice = 0.002;
    const storagePrice = 0.2;

    const [totalCost, setTotalCost] = useState(0);
    const [savings, setSavings] = useState(0);

    useEffect(() => {
        const cost = (agents * basePrice) + ((tasks - 100) > 0 ? (tasks - 100) * taskPrice : 0) + ((storage - 50) > 0 ? (storage - 50) * storagePrice : 0);
        setTotalCost(Math.floor(cost));

        // Estimated human cost equivalent (avg $20/hr, 10 mins per task)
        const humanHours = (tasks * 10) / 60;
        const humanCost = humanHours * 20;
        setSavings(Math.floor(humanCost - cost));
    }, [agents, tasks, storage]);

    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <span className="text-cyan-500">ROI</span> CALCULATOR
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Sliders */}
                <div className="space-y-8">
                    <div>
                        <div className="flex justify-between text-sm font-bold tracking-widest text-slate-400 mb-4">
                            <span>ACTIVE AGENTS</span>
                            <span className="text-white">{agents}</span>
                        </div>
                        <input
                            type="range" min="1" max="20" value={agents}
                            onChange={(e) => setAgents(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between text-sm font-bold tracking-widest text-slate-400 mb-4">
                            <span>TASKS / MONTH</span>
                            <span className="text-white">{tasks.toLocaleString()}</span>
                        </div>
                        <input
                            type="range" min="100" max="50000" step="100" value={tasks}
                            onChange={(e) => setTasks(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:accent-purple-400 transition-all"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between text-sm font-bold tracking-widest text-slate-400 mb-4">
                            <span>STORAGE (GB)</span>
                            <span className="text-white">{storage} GB</span>
                        </div>
                        <input
                            type="range" min="50" max="1000" step="10" value={storage}
                            onChange={(e) => setStorage(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:accent-pink-400 transition-all"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="flex flex-col justify-center items-center bg-black/40 rounded-2xl p-8 border border-white/5">
                    <div className="text-center mb-8">
                        <p className="text-sm font-mono text-slate-400 mb-1">ESTIMATED COST</p>
                        <motion.div
                            key={totalCost}
                            initial={{ scale: 1.2, color: '#fff' }}
                            animate={{ scale: 1, color: '#22d3ee' }}
                            className="text-6xl font-black tracking-tighter"
                        >
                            ${totalCost}
                            <span className="text-lg text-slate-500 font-normal">/mo</span>
                        </motion.div>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-8" />

                    <div className="text-center">
                        <p className="text-sm font-mono text-emerald-400 mb-1">POTENTIAL SAVINGS</p>
                        <motion.div
                            key={savings}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="text-3xl font-bold text-white"
                        >
                            ${savings.toLocaleString()}
                            <span className="text-xs text-slate-500 font-normal block mt-1">vs traditional labor</span>
                        </motion.div>
                    </div>

                    <button className="mt-8 w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors rounded-lg">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </div>
    );
};
