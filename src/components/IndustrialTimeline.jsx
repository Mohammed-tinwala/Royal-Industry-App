import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2012",
    title: "Company Founded",
    desc: "Royal Industry started its journey with a vision to deliver quality industrial solutions.",
    icon: "flag"
  },
  {
    year: "2015",
    title: "Expanded Product Range",
    desc: "Introduced multiple industrial components and machinery accessories.",
    icon: "inventory_2"
  },
  {
    year: "2018",
    title: "Trusted by Major Clients",
    desc: "Partnered with contractors, factories, and infrastructure firms.",
    icon: "handshake"
  },
  {
    year: "2021",
    title: "Digital Transformation",
    desc: "Adopted online ordering, inventory management, and logistics systems.",
    icon: "computer"
  },
  {
    year: "2024",
    title: "Growing Nationwide",
    desc: "Serving industries across multiple cities with fast delivery.",
    icon: "public"
  },
  {
    year: "Today",
    title: "Leading Industrial Supplier",
    desc: "Continuously evolving with innovation, reliability, and trust.",
    icon: "workspace_premium"
  },
];

const IndustrialTimeline = () => {
  return (
    <section className="relative mt-12 px-4">

      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-b from-yellow-500/10 via-transparent to-orange-500/10 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-8"
        >
          Our Industrial Journey
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-16">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[46%] bg-white rounded-2xl p-6 shadow-xl relative">

                    {/* Icon circle */}
                    <div
                      className={`absolute top-6 ${
                        isLeft ? "-right-8" : "-left-8"
                      } w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg`}
                    >
                      <span className="material-symbols-rounded text-white text-2xl">
                        {item.icon}
                      </span>
                    </div>

                    {/* Year */}
                    <span className="text-sm text-yellow-600 font-semibold">
                      {item.year}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold mt-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mt-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustrialTimeline;
