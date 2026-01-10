import { motion } from "framer-motion";

const CheckIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const Pricing = () => {

    return (
        <section className="py-40 px-6 bg-black relative overflow-hidden" id="pricing">
            <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-4"
                >
                    ACCESS <span className="text-cyan-500">GRANTED</span>
                </motion.h2>
                <p className="text-slate-500 text-lg uppercase tracking-widest font-mono">Select your protocol level</p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10 perspective-1000 items-start">

                {/* SOLO FOUNDER */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col backdrop-blur-sm relative group h-full"
                >
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 px-4 py-2 border border-white/10 rounded-full w-fit">
                        Solo Founder
                    </div>
                    <div className="text-5xl font-black mb-2 flex items-baseline gap-2">
                        ₹30,000 <span className="text-lg font-normal text-slate-500">upto</span>
                    </div>
                    <div className="text-sm font-mono text-cyan-500 mb-6 flex items-center gap-2">
                        + ₹15,000 / monthly <span className="text-slate-600">upto</span>
                    </div>

                    <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-white/10 pb-8">
                        The vibe: For the solo operator needing extra hands.
                    </p>

                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span><strong className="text-white">Compute:</strong> 100k Generative Credits / monthly</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span><strong className="text-white">Interface:</strong> 1 AI Chatbot Deployment</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span><strong className="text-white">Memory:</strong> Session-Based Context (Short-term)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span><strong className="text-white">Support:</strong> Standard Email Protocol</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span><strong className="text-white">License:</strong> Aether AI Branded</span>
                        </li>
                    </ul>

                    <button className="w-full py-4 border border-white/10 hover:bg-white/10 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors mt-auto">
                        Deploy Solo
                    </button>
                </motion.div>

                {/* COMPANY SYSTEMS (Business) */}
                <motion.div
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-gradient-to-b from-cyan-950/20 to-black border border-cyan-500/50 rounded-[2rem] p-8 flex flex-col h-full shadow-[0_0_50px_rgba(34,211,238,0.1)]"
                >
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black font-black text-[10px] uppercase tracking-[0.2em] px-4 py-1 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] whitespace-nowrap">
                        Recommended Protocol
                    </div>

                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-8 mt-4 w-fit">
                        Company Systems
                    </div>
                    <div className="text-6xl font-black mb-2 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] flex items-baseline gap-2">
                        ₹50,000 <span className="text-lg font-normal text-slate-400">upto</span>
                    </div>
                    <div className="text-sm font-mono text-cyan-500 mb-6 flex items-center gap-2">
                        + ₹40,000 / monthly <span className="text-slate-500">upto</span>
                    </div>

                    <p className="text-slate-300 text-sm mb-8 leading-relaxed border-b border-white/10 pb-8">
                        The vibe: For businesses replacing entire departments with AI.
                    </p>

                    <ul className="space-y-4 mb-8 flex-1 relative z-10">
                        <li className="flex items-start gap-3 text-sm text-slate-200">
                            <CheckIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                            <span><strong className="text-white">Compute:</strong> 1M Generative Credits / monthly (10x Power)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-200">
                            <CheckIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                            <span><strong className="text-white">Architecture:</strong> Full Business Logic Setup</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-200">
                            <CheckIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                            <span><strong className="text-white">Interface:</strong> Multi-Modal Agents (Chat + Voice Synthesis)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-200">
                            <CheckIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                            <span><strong className="text-white">Memory:</strong> Vector Database Recall (Long-term)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-200">
                            <CheckIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                            <span><strong className="text-white">Support:</strong> Live Developer Access (12 PM - 9 PM)</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-200">
                            <CheckIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                            <span><strong className="text-white">License:</strong> White-Label (Branding Removed)</span>
                        </li>
                    </ul>

                    <button className="relative z-10 w-full py-5 bg-white text-black rounded-xl font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow mt-auto">
                        Initialize Business
                    </button>
                </motion.div>

                {/* ENTERPRISE */}
                <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col backdrop-blur-sm h-full"
                >
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 px-4 py-2 border border-white/10 rounded-full w-fit">
                        Enterprise
                    </div>
                    <div className="text-5xl font-black mb-2">FLEXIBLE</div>
                    <div className="text-sm font-mono text-slate-500 mb-6">
                        Custom Pricing
                    </div>

                    <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-white/10 pb-8">
                        The vibe: For industry leaders needing sovereign AI infrastructure.
                    </p>

                    <ul className="space-y-4 mb-8 flex-1">
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span>Everything in <strong>Company Systems</strong></span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span><strong className="text-white">Compute:</strong> Custom Training & Fine-Tuning</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span><strong className="text-white">Support:</strong> 24/7 Dedicated Developer Team</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-slate-300">
                            <CheckIcon className="w-5 h-5 text-cyan-500 shrink-0" />
                            <span><strong className="text-white">Architecture:</strong> Custom LLM Training</span>
                        </li>
                    </ul>

                    <button className="w-full py-4 border border-white/10 hover:bg-white/10 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors mt-auto">
                        Contact Sales
                    </button>
                </motion.div>

            </div>

            <div className="mt-20 text-center">
                <p className="inline-block text-[10px] font-mono uppercase tracking-widest text-slate-600 border border-white/5 px-6 py-3 rounded-full">
                    * Pricing is indicative. Complexity varies.
                </p>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}
