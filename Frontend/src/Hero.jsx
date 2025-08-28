import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/526/658/non_2x/modern-building-with-property-and-real-estate-investment-photo.jpg"
            alt="Luxury apartment building at sunset"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Dream Home Today
          </h1>
          <div className="space-x-4">
            <button className="bg-blue-600 px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700">
              Book a Visit
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200">
              Explore Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
