import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
    const { locale, setLocale } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
        { code: 'es', label: 'Español' },
        { code: 'hi', label: 'हिन्दी' },
        { code: 'hi-en', label: 'Hinglish' }
    ];

    return (
        <div className="relative z-50 pointer-events-auto">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-white/10 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
                aria-label="Change Language"
            >
                <span className={locale === 'en' ? 'text-cyan-400' : 'text-white'}>
                    {languages.find(l => l.code === locale)?.label || locale.toUpperCase()}
                </span>
                <span className="text-[8px] opacity-50">▼</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-xl min-w-[80px]"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLocale(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-2 text-xs font-mono font-bold text-left hover:bg-white/5 transition-colors ${locale === lang.code ? 'text-cyan-400' : 'text-slate-400'
                                    }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
