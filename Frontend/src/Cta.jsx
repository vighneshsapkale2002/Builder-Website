import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative bg-blue-600 text-white py-16 px-6 text-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://source.unsplash.com/1600x900/?modern-apartment,cityscape"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Book a Site Visit & Explore Your Dream Home
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Limited units available! Schedule your visit today and get exclusive
          pre-launch offers.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
            Book a Site Visit
          </button>
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-500 transition">
            Enquire Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
