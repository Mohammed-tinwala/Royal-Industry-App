import React from "react";
import { motion } from "framer-motion";
import bannerImg from '../assets/banner1.jpg'
import ownerImg from '../assets/aliasgerroyal.jpg'
import IndustrialTimeline from "../components/IndustrialTimeline";

const About = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">

      {/* Owner Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold mb-6 text-center"
        >
          Meet Our Founder
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-40 h-40 rounded-full flex items-center justify-center mb-5">
            <img src={ownerImg} alt="Mr. Aliasger Royal" className="object-cover rounded-full w-full h-full" />
          </div>

          <h3 className="text-xl md:text-2xl font-semibold">Mr. Aliasger Royal</h3>
          <p className="text-gray-600 text-sm md:text-base mb-3">
            Founder & Managing Director, Royal Industry
          </p>
          <p className="max-w-xl text-gray-700 leading-relaxed text-sm md:text-base">
            With over 15 years of experience, Mr. Aliasger Royal has built Royal Industry on a
            foundation of trust, dedication, and innovation. His vision drives the company to
            achieve new heights and deliver exceptional industrial solutions.
          </p>
        </motion.div>

        <IndustrialTimeline />


        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto md:px-16 mt-6"
        >
          <div className="w-full h-48 md:h-72 rounded-xl flex items-center justify-center">
            <img src={bannerImg} alt="Hero Banner" className="object-cover w-full h-full" />
          </div>
        </motion.div>

        {/* Who We Are */}
        <section className="max-w-5xl mx-auto md:px-16 py-10">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-4"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base"
          >
            Royal Industry is a leading manufacturer and supplier of high-grade steel and industrial
            materials. With a focus on durability, precision, and customer satisfaction, we deliver
            products that meet global quality standards.
          </motion.p>

          {/* Mission Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full h-52 rounded-xl flex items-center justify-center"
            >
              <img src={bannerImg} alt="Hero Banner" className="object-cover w-full h-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To deliver top-quality industrial solutions that empower businesses while ensuring
                sustainability, integrity, and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className=" md:px-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                To be the most trusted industry leader known for innovation, quality, and global
                excellence in industrial solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full h-52 rounded-xl flex items-center justify-center"
            >
              <img src={bannerImg} alt="Hero Banner" className="object-cover w-full h-full" />
            </motion.div>
          </div>
        </section>
      </section>


    </div >
  );
};

export default About;
