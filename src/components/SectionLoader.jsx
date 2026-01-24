import React from 'react';

const SectionLoader = () => {
    return (
        <div className="w-full h-96 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-white/10 border-t-cyan-500 rounded-full animate-spin" />
                <span className="text-xs font-mono uppercase tracking-widest text-slate-600 animate-pulse">
                    Loading Module...
                </span>
            </div>
        </div>
    );
};

export default SectionLoader;
