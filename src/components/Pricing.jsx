import { motion } from "framer-motion";
import { PricingCalculator } from './PricingCalculator';
import ParallaxSection from './ParallaxSection';
import { useLanguage } from "../context/LanguageContext";

const CheckIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

export const Pricing = () => {
    const { t } = useLanguage();

    const handlePayment = (amount, planName) => {
        if (!window.Razorpay) {
            alert("Razorpay SDK failed to load. Please check your connection.");
            return;
        }

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY, // Live API Key from env
            amount: amount, // Amount in paise
            currency: "INR",
            name: "Aether AI",
            description: `Payment for ${planName}`,
            image: "https://via.placeholder.com/150?text=Aether+AI", // Replace with actual logo URL if available
            handler: function (response) {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                // Verify payment on backend here if needed
            },
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            notes: {
                address: "Aether AI HQ"
            },
            theme: {
                color: "#22d3ee" // Cyan brand color
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert(`Payment Failed: ${response.error.description}`);
        });
        rzp1.open();
    };

    return (

        <section className="py-20 md:py-32 px-6 bg-[#020202] relative overflow-hidden text-white" id="pricing">

            {/* Cybernetic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* Top Laser Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
                {/* Header Status Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">{t('pricing.system_unlocked').toUpperCase()}</span>
                </div>

                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white"
                >
                    {t('pricing.header_access')} <span className="text-cyan-500">{t('pricing.header_granted')}</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed"
                >
                    {t('pricing.subtitle')}
                    <br />
                    <span className="text-sm font-mono text-slate-500 mt-2 block">{t('pricing.root_access')}</span>
                </motion.p>

                {/* Calculator */}
                <div className="max-w-4xl mx-auto mb-24 text-left p-1 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm">
                    <div className="bg-[#020202]/80 rounded-[20px] p-6 md:p-10 border border-white/5 shadow-2xl">
                        <PricingCalculator />
                    </div>
                </div>

                {/* Protocol Selector Divider */}
                <div className="relative flex items-center justify-center py-10 mb-10">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="px-6 bg-[#020202] border border-white/10 rounded-full py-2 flex items-center gap-3 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                            <span className="text-cyan-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">{t('pricing.select_protocol')}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 perspective-1000 items-start">

                {/* SOLO FOUNDER */}
                <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative bg-[#050505] border border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col h-full overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 px-4 py-2 border border-white/10 rounded-full w-fit group-hover:border-white/30 transition-colors">
                            {t('pricing.solo.title')}
                        </div>
                        <div className="text-4xl sm:text-5xl font-black mb-2 flex items-baseline gap-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                            {t('pricing.solo.price')} <span className="text-lg font-normal text-slate-500">{t('pricing.solo.upto')}</span>
                        </div>
                        <div className="text-sm font-mono text-cyan-500/80 mb-6 flex items-center gap-2">
                            {t('pricing.solo.monthly')} <span className="text-slate-600">{t('pricing.solo.upto')}</span>
                        </div>

                        <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-white/10 pb-8 group-hover:border-white/20 transition-colors">
                            {t('pricing.solo.vibe')}
                        </p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-cyan-900 group-hover:text-cyan-400 shrink-0 transition-colors duration-300" />
                                <span><strong className="text-white">{t('pricing.features.compute')}:</strong> 100k Generative Credits / monthly</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-cyan-900 group-hover:text-cyan-400 shrink-0 transition-colors duration-300" />
                                <span><strong className="text-white">{t('pricing.features.interface')}:</strong> 1 AI Chatbot Deployment</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-cyan-900 group-hover:text-cyan-400 shrink-0 transition-colors duration-300" />
                                <span><strong className="text-white">{t('pricing.features.memory')}:</strong> Session-Based Context (Short-term)</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-cyan-900 group-hover:text-cyan-400 shrink-0 transition-colors duration-300" />
                                <span><strong className="text-white">{t('pricing.features.support')}:</strong> Standard Email Protocol</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-cyan-900 group-hover:text-cyan-400 shrink-0 transition-colors duration-300" />
                                <span><strong className="text-white">{t('pricing.features.license')}:</strong> Aether AI Branded</span>
                            </li>
                        </ul>

                        <button
                            onClick={() => handlePayment(3000000, "Solo Founder Protocol")}
                            className="w-full py-4 border border-white/10 hover:bg-white hover:text-black rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 mt-auto"
                        >
                            {t('pricing.solo.btn')}
                        </button>
                    </div>
                </motion.div>

                {/* COMPANY SYSTEMS (Business) - THE CRAZY ONE */}
                <motion.div
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group rounded-[2rem] p-[1px] h-full"
                >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-600 to-purple-600 rounded-[2rem] opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse" />

                    <div className="relative bg-[#020202] rounded-[2rem] p-6 md:p-8 flex flex-col h-full overflow-hidden">
                        {/* Noise & Glow */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
                        <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-cyan-500/20 blur-[80px]" />
                        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-cyan-900/10 to-transparent" />

                        {/* Top Badge */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                            <div className="relative group/badge">
                                <div className="absolute inset-0 bg-cyan-400 blur-md opacity-50 group-hover/badge:opacity-100 transition-opacity" />
                                <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black text-[10px] uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] whitespace-nowrap flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                                    {t('pricing.company.recommended')}
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col h-full mt-2">
                            <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-8 w-fit drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                                {t('pricing.company.title')}
                            </div>
                            <div className="text-5xl sm:text-6xl font-black mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] flex items-baseline gap-2">
                                {t('pricing.company.price')} <span className="text-lg font-normal text-slate-400">{t('pricing.company.upto')}</span>
                            </div>
                            <div className="text-sm font-mono text-cyan-400 mb-6 flex items-center gap-2 bg-cyan-950/30 w-fit px-3 py-1 rounded border border-cyan-500/30">
                                {t('pricing.company.monthly')} <span className="text-slate-400">{t('pricing.company.upto')}</span>
                            </div>

                            <p className="text-slate-300 text-sm mb-8 leading-relaxed border-b border-white/10 pb-8">
                                {t('pricing.company.vibe')}
                            </p>

                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-start gap-3 text-sm text-slate-200">
                                    <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                                        <CheckIcon className="w-3 h-3 text-cyan-400 shrink-0" />
                                    </div>
                                    <span><strong className="text-white text-shadow-sm">{t('pricing.features.compute')}:</strong> 1M Generative Credits / monthly (10x Power)</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-200">
                                    <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                                        <CheckIcon className="w-3 h-3 text-cyan-400 shrink-0" />
                                    </div>
                                    <span><strong className="text-white shadow-cyan-500/50">{t('pricing.features.architecture')}:</strong> Full Business Logic Setup</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-200">
                                    <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                                        <CheckIcon className="w-3 h-3 text-cyan-400 shrink-0" />
                                    </div>
                                    <span><strong className="text-white">{t('pricing.features.interface')}:</strong> Multi-Modal Agents (Chat + Voice Synthesis)</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-200">
                                    <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                                        <CheckIcon className="w-3 h-3 text-cyan-400 shrink-0" />
                                    </div>
                                    <span><strong className="text-white">{t('pricing.features.memory')}:</strong> Vector Database Recall (Long-term)</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-200">
                                    <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                                        <CheckIcon className="w-3 h-3 text-cyan-400 shrink-0" />
                                    </div>
                                    <span><strong className="text-white">{t('pricing.features.support')}:</strong> Live Developer Access (12 PM - 9 PM)</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-slate-200">
                                    <div className="p-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                                        <CheckIcon className="w-3 h-3 text-cyan-400 shrink-0" />
                                    </div>
                                    <span><strong className="text-white">{t('pricing.features.license')}:</strong> White-Label (Branding Removed)</span>
                                </li>
                            </ul>

                            <button
                                onClick={() => handlePayment(5000000, "Company Systems Protocol")}
                                className="relative w-full py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-xl font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 mt-auto hover:scale-[1.02]"
                            >
                                <span className="relative z-10">{t('pricing.company.btn')}</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* ENTERPRISE */}
                <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative bg-[#050505] border border-white/5 rounded-[2rem] p-6 md:p-8 flex flex-col h-full md:col-span-2 lg:col-span-1 overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-8 px-4 py-2 border border-white/10 rounded-full w-fit group-hover:border-purple-500/30 group-hover:text-purple-400 transition-colors">
                            {t('pricing.enterprise.title')}
                        </div>
                        <div className="text-4xl sm:text-5xl font-black mb-2 text-white group-hover:text-purple-100 transition-colors">{t('pricing.enterprise.price')}</div>
                        <div className="text-sm font-mono text-slate-500 mb-6 group-hover:text-purple-300/70 transition-colors">
                            {t('pricing.enterprise.subtitle')}
                        </div>

                        <p className="text-slate-400 text-sm mb-8 leading-relaxed border-b border-white/10 pb-8 group-hover:border-purple-500/20">
                            {t('pricing.enterprise.vibe')}
                        </p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-purple-900 group-hover:text-purple-400 shrink-0 transition-colors duration-300" />
                                <span>Everything in <strong>{t('pricing.company.title')}</strong></span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-purple-900 group-hover:text-purple-400 shrink-0 transition-colors duration-300" />
                                <span><strong className="text-white">{t('pricing.features.compute')}:</strong> Custom Training & Fine-Tuning</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-purple-900 group-hover:text-purple-400 shrink-0 transition-colors duration-300" />
                                <span><strong className="text-white">{t('pricing.features.support')}:</strong> 24/7 Dedicated Developer Team</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-white transition-colors">
                                <CheckIcon className="w-5 h-5 text-purple-900 group-hover:text-purple-400 shrink-0 transition-colors duration-300" />
                                <span><strong className="text-white">{t('pricing.features.architecture')}:</strong> Custom LLM Training</span>
                            </li>
                        </ul>

                        <button
                            onClick={() => window.open('https://atherai2026.app.n8n.cloud/form/e7216e1d-645f-4fbc-8df6-5dd4c0318e87', '_blank')}
                            className="w-full py-4 border border-white/10 hover:bg-purple-600 hover:text-white hover:border-purple-500 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 mt-auto shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        >
                            {t('pricing.enterprise.btn')}
                        </button>
                    </div>
                </motion.div>

            </div>

            <div className="mt-20 text-center">
                <p className="inline-block text-[10px] font-mono uppercase tracking-widest text-slate-600 border border-white/5 px-6 py-3 rounded-full">
                    {t('pricing.disclaimer')}
                </p>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
}
