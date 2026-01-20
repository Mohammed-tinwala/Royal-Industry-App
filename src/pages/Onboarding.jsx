import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bg1 from "../assets/banner1.jpg";
import bg2 from "../assets/banner2.jpg";
import bg3 from "../assets/banner3.jpg";

import logo from "../assets/logo.png";

const slides = [
    {
        title: "Premium Industrial Quality",
        desc: "High-grade materials engineered for strength and durability.",
        image: bg1,
    },
    {
        title: "Trusted by Businesses",
        desc: "Serving industries across construction and infrastructure.",
        image: bg2,
    },
    {
        title: "Reliable Delivery & Support",
        desc: "Fast response, dependable logistics, and expert assistance.",
        image: bg3,
    },
];

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
        x: "0%",
    },
    exit: (direction) => ({
        x: direction > 0 ? "-100%" : "100%",
    }),
};

const Onboarding = ({ onFinish }) => {
    const [[index, direction], setIndex] = useState([0, 1]);

    const next = () => {
        if (index === slides.length - 1) {
            onFinish();
            return;
        }
        setIndex([index + 1, 1]);
    };

    return (
        <div className="h-screen w-full overflow-hidden relative bg-black">

            {/* Logo */}
            <div className="absolute top-8 left-6 z-30">
                <img
                    src={logo}
                    alt="Royal Industry"
                    className="w-16 md:w-18 object-contain"
                />
            </div>


            <AnimatePresence custom={direction} initial={false}>
                <motion.div
                    key={index}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "tween", ease: "easeInOut", duration: 0.6 },
                    }}
                    className="absolute inset-0"
                >
                    {/* Background */}
                    <img
                        src={slides[index].image}
                        alt=""
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60" />

                    {/* Content */}
                    <div className="absolute bottom-35 left-0 right-0 px-6 text-white">
                        <h2 className="text-5xl md:text-4xl font-bold mb-3">
                            {slides[index].title}
                        </h2>
                        <p className="text-gray-200 text-sm md:text-base max-w-md">
                            {slides[index].desc}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Bottom UI */}
            <div className="absolute bottom-6 left-0 right-0 px-6 z-20">

                {/* dots */}
                <div className="flex justify-center gap-2 mb-5">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/40"
                                }`}
                        />
                    ))}
                </div>

                {/* button */}
                <button
                    onClick={next}
                    className="w-full bg-white text-black py-3 rounded-xl font-semibold"
                >
                    {index === slides.length - 1 ? "Get Started" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default Onboarding;
