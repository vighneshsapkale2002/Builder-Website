import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaSwimmer, FaDumbbell, FaTree, FaParking } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Skyline Residency",
    location: "Pune",
    price: 4500000,
    config: ["1BHK", "2BHK", "3BHK"],
    size: "650 - 1200 sqft",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154154-2f21c56d9931?auto=format&fit=crop&w=800&q=80",
    ],
    floorPlans: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    ],
    amenities: ["pool", "gym", "garden", "parking"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.8567436!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf6c0d1e7c2f%3A0xa7d35a6b89e6d0c0!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1692540000000!5m2!1sen!2sus"
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return <p className="text-center py-20">Project not found.</p>;

  const amenityIcons = {
    pool: <FaSwimmer className="text-blue-500 text-2xl" />,
    gym: <FaDumbbell className="text-gray-800 text-2xl" />,
    garden: <FaTree className="text-green-600 text-2xl" />,
    parking: <FaParking className="text-yellow-600 text-2xl" />,
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Hero Banner / Slider */}
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <img
          src={project.images[currentImage]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={() =>
              setCurrentImage(
                currentImage === 0 ? project.images.length - 1 : currentImage - 1
              )
            }
            className="bg-white/70 rounded-full p-2 hover:bg-white shadow"
          >
            ◀
          </button>
          <button
            onClick={() =>
              setCurrentImage(
                currentImage === project.images.length - 1 ? 0 : currentImage + 1
              )
            }
            className="bg-white/70 rounded-full p-2 hover:bg-white shadow"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Key Details */}
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
          <p className="text-gray-600">{project.location}</p>
          <p className="text-blue-600 text-xl font-semibold mt-2">
            Starting ₹{project.price.toLocaleString()}
          </p>
          <p className="mt-2">Size: {project.size}</p>
          <p>Configurations: {project.config.join(", ")}</p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <button className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-medium">
            Book a Flat
          </button>
          <button className="bg-gray-200 py-3 rounded-xl hover:bg-gray-300 font-medium">
            Contact Us
          </button>
          <Link
            to="/"
            className="text-blue-600 underline hover:text-blue-800 mt-2"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>

      {/* Floor Plans */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Floor Plans</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {project.floorPlans.map((plan, idx) => (
            <img
              key={idx}
              src={plan}
              alt={`Floor Plan ${idx + 1}`}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Amenities</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {project.amenities.map((a, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
            >
              {amenityIcons[a]}
              <span className="mt-2 capitalize">{a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Location Map */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Location</h3>
        <iframe
          src={project.mapUrl}
          width="100%"
          height="400"
          className="rounded-lg shadow"
          allowFullScreen
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectDetails;
