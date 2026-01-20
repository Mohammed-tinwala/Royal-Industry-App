import React from "react";
import { motion } from "framer-motion";

const products = [
    {
        title: "Heavy Duty Industrial Motors",
        desc: "Engineered for performance, durability, and continuous industrial operation.",
        image:
            "https://images.unsplash.com/photo-1761839257513-a921710a4291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
        title: "High Performance Bearings",
        desc: "Precision-crafted bearings designed for smooth and long-lasting motion.",
        image:
            "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
        title: "Industrial Power Tools",
        desc: "Built for professionals who demand strength, accuracy, and reliability.",
        image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
];

const PremiumProductShowcase = () => {
    return (
        <section className="mt-0">

            {products.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center px-6"
                >
                    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">

                        {/* TEXT */}
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                {item.title}
                            </h2>

                            <p className="text-gray-600 mt-6 text-lg max-w-md">
                                {item.desc}
                            </p>

                            <button className="mt-8 px-8 py-3 bg-(--secondary-color) border shadow-2xl border-(--primary-color) text-white rounded-full hover:scale-105 transition">
                                Explore Product
                            </button>
                        </div>

                        {/* IMAGE */}
                        <motion.img
                            src={item.image}
                            alt={item.title}
                            initial={{ scale: 0.85 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full rounded-3xl shadow-2xl object-cover mb-5"
                        />
                    </div>
                </motion.div>
            ))}

        </section>
    );
};

export default PremiumProductShowcase;
