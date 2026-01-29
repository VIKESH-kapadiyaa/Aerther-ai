import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ParallaxSection from './ParallaxSection';
import { useLanguage } from "../context/LanguageContext";

export const Services = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const [selectedService, setSelectedService] = useState(null);
    const { t } = useLanguage();

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    const serviceLayouts = [
        {
            colSpan: "md:col-span-8",
            bg: "bg-white/[0.02] border-white/10"
        },
        {
            colSpan: "md:col-span-4",
            bg: "bg-gradient-to-br from-cyan-900/20 to-transparent border-cyan-500/20"
        },
        {
            colSpan: "md:col-span-4",
            bg: "bg-white/[0.02] border-white/10"
        },
        {
            colSpan: "md:col-span-8",
            bg: "bg-[#050505] border-white/10"
        },
        {
            colSpan: "md:col-span-6",
            bg: "bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/20"
        },
        {
            colSpan: "md:col-span-6",
            bg: "bg-white/[0.02] border-white/10"
        }
    ];

    const servicesItems = t('services.items');
    // Guard against servicesItems being undefined or not an array during initial load or error
    const services = Array.isArray(servicesItems) ? servicesItems.map((item, i) => ({
        ...item,
        ...(serviceLayouts[i] || {})
    })) : [];

    return (
        <section
            ref={targetRef}
            className="relative py-32 bg-transparent overflow-hidden"
            id="services"
        >
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6"
                >
                    {t('services.title_core')}<br /><span className="text-slate-700">{t('services.title_modules')}</span>
                </motion.h2>
            </div>

            {/* Grid/Carousel */}
            <div className="max-w-7xl mx-auto px-6 flex md:grid md:grid-cols-12 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        onClick={() => setSelectedService(service)}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        whileHover={{ scale: 0.98 }}
                        className={`group relative rounded-[2rem] border p-8 md:p-8 lg:p-12 overflow-hidden flex flex-col justify-between min-h-[400px] md:min-h-[300px] cursor-pointer flex-shrink-0 w-[85vw] md:w-auto snap-center ${service.colSpan} ${service.bg}`}
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] group-hover:bg-cyan-500/10 transition-colors duration-700 pointer-events-none -mr-20 -mt-20" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-8 text-xs font-mono text-slate-400">
                                // 0{i + 1}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{service.title}</h3>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">{service.desc}</p>
                        </div>

                        <div className="relative z-10 flex justify-end">
                            {service.action ? (
                                <div className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-white text-xs font-bold uppercase tracking-widest group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-black transition-all">
                                    {service.action}
                                </div>
                            ) : (
                                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-xl">
                                    ↗
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)]"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative z-10">
                                <div className="text-cyan-500 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                                    {t('services.module_details')}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-8">
                                    {selectedService.title}
                                </h3>
                                <div className="prose prose-invert prose-lg">
                                    <p className="text-slate-300 leading-relaxed text-lg">
                                        {selectedService.details}
                                    </p>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                                    <div className="text-xs text-slate-500 font-mono">
                                        {t('services.system_id')}: 00{services.indexOf(selectedService) + 1}
                                    </div>
                                    <button
                                        onClick={() => {
                                            setSelectedService(null);
                                            window.open('https://aether26.app.n8n.cloud/form/46ede1a5-eabb-4aa4-bf61-8153365a31bf', '_blank');
                                        }}
                                        className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-cyan-400 transition-colors"
                                    >
                                        {t('services.init_module')}
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Background */}
                            {/* Decorative Background */}
                            <ParallaxSection offset={-20} className="absolute top-0 right-0 pointer-events-none -mr-32 -mt-32">
                                <div className="w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full" />
                            </ParallaxSection>
                            <ParallaxSection offset={20} className="absolute bottom-0 left-0 pointer-events-none -ml-32 -mb-32">
                                <div className="w-64 h-64 bg-purple-500/5 blur-[80px] rounded-full" />
                            </ParallaxSection>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
