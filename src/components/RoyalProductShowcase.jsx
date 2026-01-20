import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const RoyalProductShowcase = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Apple-style effects
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.2, 0.5], [40, 0]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-white flex items-center overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* TEXT CONTENT */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Heavy-Duty Industrial Motors
                    </h2>

                    <p className="text-gray-600 text-lg max-w-md">
                        Engineered for continuous operation, unmatched durability,
                        and superior industrial performance.
                    </p>

                    <button className="px-8 py-3 rounded-full bg-black text-white hover:scale-105 transition">
                        Explore Product
                    </button>
                </motion.div>

                {/* PRODUCT IMAGE */}
                <motion.img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
                    alt="Royal Industry Motor"
                    style={{ scale: imageScale }}
                    className="w-full rounded-3xl shadow-2xl object-cover"
                />
            </div>
        </section>
    );
};

export default RoyalProductShowcase;
