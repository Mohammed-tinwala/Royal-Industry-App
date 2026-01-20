import React from "react";
import { motion } from "framer-motion";

const trustStats = [
    {
        id: 1,
        icon: "groups",
        value: "1000+",
        label: "Happy Clients",
    },
    {
        id: 2,
        icon: "business_center",
        value: "500+",
        label: "Business Partners",
    },
    {
        id: 3,
        icon: "factory",
        value: "15+",
        label: "Years of Experience",
    },
    {
        id: 4,
        icon: "verified",
        value: "100%",
        label: "Genuine Products",
    },
];

const CustomerTrust = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 mt-12">

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold text-center mb-10"
            >
                Trusted by Businesses Across India
            </motion.h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustStats.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300"
                    >
                        {/* Icon */}
                        <span className="material-symbols-rounded text-yellow-600 text-4xl mb-3 block">
                            {item.icon}
                        </span>

                        {/* Value */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {item.value}
                        </h3>

                        {/* Label */}
                        <p className="text-gray-600 text-sm md:text-base mt-1">
                            {item.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CustomerTrust;
