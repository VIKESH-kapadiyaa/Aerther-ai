import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = ({ children, offset = 50, className = "" }) => {
    const ref = useRef(null);

    // Track scroll progress relative to this element
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Map scroll progress to a Y translation
    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <div ref={ref} className={`${className.includes('absolute') || className.includes('fixed') ? '' : 'relative'} overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
};

export default ParallaxSection;
