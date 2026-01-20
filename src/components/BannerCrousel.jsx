import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import { Link } from "react-router-dom";

const banners = [
  {
    title: "Heavy Machinery Offers",
    desc: "Up to 30% discount on industrial equipment",
    image: banner1,
  },
  {
    title: "Royal Industry Solutions",
    desc: "Trusted industrial partner for businesses",
    image: banner2,
  },
  {
    title: "New Manufacturing Units",
    desc: "High performance. Maximum reliability.",
    image: banner3,
  },
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-4  overflow-hidden">
      <div className="relative h-[210px] md:h-60 rounded-2xl overflow-hidden shadow-lg">

        {/* SLIDER TRACK */}
        <motion.div
          className="flex h-full"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {banners.map((item, i) => (
            <div
              key={i}
              className="min-w-full h-full relative"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt=""
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-200 mt-1">
                  {item.desc}
                </p>

                <Link
                to="/products"
                  className="mt-3 w-fit px-4 py-1.5 text-sm rounded-full
                  bg-(--secondary-color) text-black font-semibold"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* dots */}
        <div className="absolute bottom-3 right-4 flex gap-2 z-10">
          {banners.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
