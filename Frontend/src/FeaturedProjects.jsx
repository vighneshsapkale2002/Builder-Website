import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Skyline Heights",
      location: "Baner, Pune",
      price: "₹45L – ₹90L",
      images: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      ],
      description:
        "A premium residential project with modern amenities, landscaped gardens, and excellent connectivity.",
    },
    {
      id: 2,
      name: "Greenwood Residency",
      location: "Whitefield, Bangalore",
      price: "₹55L – ₹1.2Cr",
      images: [
        // "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
      ],
      description:
        "Luxury flats surrounded by greenery with world-class facilities including clubhouse, pool, and gym.",
    },
    {
      id: 3,
      name: "Oceanview Towers",
      location: "Andheri, Mumbai",
      price: "₹75L – ₹2.5Cr",
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-aac1a78ccdc1?auto=format&fit=crop&w=800&q=80",
      ],
      description:
        "Exclusive sea-facing apartments designed for modern urban living with unmatched luxury.",
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => openProject(project)}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="flex items-center text-gray-500 text-sm mb-3">
                <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                {project.location}
              </p>
              <p className="text-lg font-bold text-blue-600">{project.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal with Gallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Slider */}
              <div className="relative">
                <img
                  src={selectedProject.images[currentIndex]}
                  alt={selectedProject.name}
                  className="w-full h-72 object-cover rounded-lg"
                />
                {/* Prev / Next Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>

              {/* Project Info */}
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                {selectedProject.name}
              </h3>
              <p className="flex items-center text-gray-500 mt-2">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                {selectedProject.location}
              </p>
              <p className="text-lg font-semibold text-blue-600 mt-2">
                {selectedProject.price}
              </p>
              <p className="text-gray-600 mt-4">
                {selectedProject.description}
              </p>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Book a Site Visit
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjects;
