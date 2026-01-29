import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="relative bg-[#020202] text-white pt-16 md:pt-24 pb-12 overflow-hidden border-t border-white/5" id="footer">

            {/* Cybernetic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* Ambient Spotlights */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none opacity-40 mx-auto" />

            {/* Scanning Laser Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent blur-[5px] animate-shimmer" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-white/5">

                    {/* Left Column: Brand & Vision (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col space-y-10">
                        {/* Brand Header */}
                        <div className="flex items-center gap-6 group cursor-default">
                            <div className="relative w-16 h-16 shrink-0 perspective-1000">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition-all duration-700" />
                                <div className="relative w-full h-full bg-[#0A0A0A] border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden group-hover:border-cyan-500/50 transition-colors duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="text-3xl font-black bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500">A</span>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <span className="text-3xl font-bold tracking-widest uppercase text-white leading-none">{t('footer.title')}</span>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-cyan-500/50" />
                                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-cyan-400/80">{t('footer.subtitle')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Vision Text */}
                        <div className="relative pl-6 border-l w-fit border-white/10">
                            <p className="text-slate-400 leading-relaxed text-sm max-w-md font-light">
                                {t('footer.desc_part1')}
                                <span className="block mt-4 text-white font-medium relative">
                                    {t('footer.desc_part2')}
                                    <span className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                </span>
                            </p>
                        </div>

                        {/* Professional Contact Cards */}
                        <div className="grid gap-4 w-full max-w-md">
                            <a href="mailto:aether.business.ai@gmail.com" className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/5 p-4 hover:border-cyan-500/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                                        <span className="text-lg">@</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">{t('footer.inquiries')}</span>
                                        <span className="text-sm font-mono text-slate-300 group-hover:text-white transition-colors duration-300">aether.business.ai@gmail.com</span>
                                    </div>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyan-500">
                                        →
                                    </div>
                                </div>
                            </a>

                            <a href="mailto:atherai.caredesk@gmail.com" className="group relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/5 p-4 hover:border-cyan-500/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-300">
                                        <span className="text-lg">?</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">{t('footer.support')}</span>
                                        <span className="text-sm font-mono text-slate-300 group-hover:text-white transition-colors duration-300">atherai.caredesk@gmail.com</span>
                                    </div>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyan-500">
                                        →
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Navigation & Socials (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row justify-between lg:pl-20 pt-4 gap-12">

                        {/* System Navigation */}
                        <div className="space-y-8">
                            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                                {t('footer.system_index')}
                            </h4>
                            <ul className="space-y-2 font-light">
                                {['Services', 'Architecture', 'Pricing'].map((item, i) => (
                                    <li key={item} className="group">
                                        <a href={`#${item.toLowerCase()}`} className="flex items-center gap-3 py-2 text-slate-400 hover:text-white transition-colors">
                                            <span className="text-[10px] font-mono text-slate-600 group-hover:text-cyan-500 transition-colors">0{i + 1}</span>
                                            <span className="h-px w-4 bg-slate-800 group-hover:w-8 group-hover:bg-cyan-500 transition-all duration-300" />
                                            <span className="tracking-wide uppercase text-sm">{t(`footer.nav.${item.toLowerCase()}`)}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Signals */}
                        <div className="space-y-8">
                            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-cyan-500" />
                                {t('footer.network')}
                            </h4>
                            <div className="flex gap-4">
                                <a href="#" className="group w-16 h-16 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/[0.05] hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
                                </a>
                                <a href="#" className="group w-16 h-16 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center hover:bg-white/[0.05] hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Instagram className="w-6 h-6 text-slate-400 group-hover:text-pink-400 group-hover:scale-110 transition-all duration-300" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-widest text-slate-500">
                    <div className="flex items-center gap-2 group hover:text-slate-300 transition-colors cursor-default">
                        <span>{t('footer.rights')}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="hidden md:block w-px h-3 bg-white/10" />

                        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                            </span>
                            <span className="text-slate-400">
                                {t('footer.status')}: <span className="text-emerald-400 font-bold ml-1">{t('footer.operational')}</span>
                            </span>
                        </div>

                        <span className="text-slate-600 block">v2.4.0-STABLE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
