import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RevealOnScroll = ({ children, width = "100%", delay = 0, direction = "up", className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getVariants = () => {
        const distance = 50;
        let initial = { opacity: 0, y: 0, x: 0 };

        switch (direction) {
            case "up":
                initial = { opacity: 0, y: distance, x: 0 };
                break;
            case "down":
                initial = { opacity: 0, y: -distance, x: 0 };
                break;
            case "left":
                initial = { opacity: 0, x: distance, y: 0 }; // Coming from right to left
                break;
            case "right":
                initial = { opacity: 0, x: -distance, y: 0 }; // Coming from left to right
                break;
            default:
                initial = { opacity: 0, y: distance, x: 0 };
        }

        return {
            hidden: initial,
            visible: {
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                    duration: 0.8,
                    ease: [0.17, 0.55, 0.55, 1], // Cubic bezier for smooth entry
                    delay: delay
                }
            }
        };
    };

    return (
        <div ref={ref} style={{ width, overflow: "hidden", position: "relative" }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealOnScroll;
