import React from 'react';
import { motion } from 'framer-motion';

export const DetailLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center"
        >
            <div className="relative">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 rounded-full border-t border-l border-cyan-500/50"
                />

                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border-b border-r border-purple-500/50"
                />

                {/* Center Pulse */}
                <motion.div
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute inset-0 m-auto w-4 h-4 bg-white/20 rounded-full blur-sm"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex flex-col items-center gap-2"
            >
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-500">
                    Accessing Secure Sandbox
                </span>
                <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1 h-1 bg-white rounded-full"
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
