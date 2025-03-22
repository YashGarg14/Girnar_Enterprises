import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-between md:mx-2 md:my-4">
      {/* Image Slider Section - Moves to Top in Mobile, Right in Desktop */}
      <div className="w-full md:w-3/5 overflow-hidden shadow-lg">
      <div className="relative w-full h-[450px] sm:h-[500px] md:h-[500px] rounded-md overflow-hidden">
  <motion.div
    className="flex w-full h-full"
    animate={{ x: `-${index * 100}%` }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    {images.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`Slide ${i + 1}`}
        className="w-full h-full object-cover flex-shrink-0 rounded-md"
      />
    ))}
  </motion.div>
</div>

      </div>

      {/* Company About Section */}
      <div className="w-full md:w-2/5 md:min-h-[55vh] md:h-auto md:px-6 px-2 flex flex-col mt-3 md:mt-0">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-left md:block hidden">
          Company Brief
        </h1>
        <p className="text-gray-700 text-[18px] leading-relaxed md:text-justify text-justify">
          Established in 2017, Girnar Enterprises is a leading trader and
          supplier of high-quality imported and domestic steam coal across
          India. We specialize in sourcing and delivering premium-grade coal to
          meet the energy and industrial needs of our clients. With a strong
          commitment to reliability, efficiency, and customer satisfaction, we
          ensure a seamless supply chain and competitive pricing for industries nationwide.
        </p>
      </div>
    </div>
  );
};

export default HomeSlider;
