import React from "react";
import { motion } from "framer-motion";
import { Building2, Award, ShieldCheck, MapPin } from "lucide-react";

const Highlights = () => {
  const features = [
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      title: "20+ Years Experience",
      desc: "Proven track record of delivering high-quality residential projects.",
    },
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: "Quality Construction",
      desc: "Premium materials and modern design ensuring durability & style.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "RERA Approved",
      desc: "All projects are transparent & approved by regulatory authorities.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-blue-600" />,
      title: "Prime Locations",
      desc: "Flats situated in well-connected, green & growing neighborhoods.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center" id="highlights">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 border rounded-xl shadow-md bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // stagger
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
          >
            {/* Animated Icon on Hover */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
              className="flex justify-center"
            >
              {item.icon}
            </motion.div>

            <h3 className="font-semibold mt-4 text-lg text-gray-700">
              {item.title}
            </h3>
            <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
