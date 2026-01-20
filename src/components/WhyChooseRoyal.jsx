import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: "verified",
    title: "15+ Years Experience",
    desc: "Over 15 years of expertise in delivering trusted industrial solutions."
  },
  {
    id: 2,
    icon: "local_shipping",
    title: "Fast Delivery",
    desc: "Quick and reliable delivery ensuring uninterrupted business operations."
  },
  {
    id: 3,
    icon: "handshake",
    title: "Trusted by Clients",
    desc: "Serving hundreds of businesses with long-term trust and commitment."
  },
  {
    id: 4,
    icon: "precision_manufacturing",
    title: "Quality Products",
    desc: "High-grade materials tested for durability, performance, and safety."
  }
];

const WhyChooseRoyal = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Why Choose Royal Industry
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Material Icon */}
            <span className="material-symbols-rounded text-yellow-600 text-4xl mb-4 block">
              {item.icon}
            </span>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseRoyal;
