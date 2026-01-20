import React from "react";
import { motion } from "framer-motion";

const industries = [
    {
        id: 1,
        icon: "factory",
        title: "Manufacturing",
        desc: "Industrial machinery, tools & production equipment",
    },
    {
        id: 2,
        icon: "construction",
        title: "Construction",
        desc: "Building materials, hardware & infrastructure support",
    },
    {
        id: 3,
        icon: "local_shipping",
        title: "Logistics",
        desc: "Transport, storage and supply chain solutions",
    },
    {
        id: 4,
        icon: "oil_barrel",
        title: "Oil & Gas",
        desc: "Heavy-duty industrial components and fittings",
    },
    {
        id: 5,
        icon: "bolt",
        title: "Electrical",
        desc: "Wires, panels, switches and power systems",
    },
    {
        id: 6,
        icon: "precision_manufacturing",
        title: "Engineering",
        desc: "Precision tools and custom industrial solutions",
    },
];

const IndustriesServed = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 mt-8">

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-semibold text-center mb-8"
            >
                Our Industries Served
            </motion.h2>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {industries.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.12 }}
                        className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 text-center"
                    >
                        {/* Icon */}
                        <span className="material-symbols-rounded text-yellow-600 text-4xl mb-4 block">
                            {item.icon}
                        </span>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-600">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default IndustriesServed;
