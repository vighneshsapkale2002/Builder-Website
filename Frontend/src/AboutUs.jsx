import React, { useEffect, useState } from "react";

const achievements = [
  { label: "Projects Completed", value: 120 },
  { label: "Happy Clients", value: 350 },
  { label: "Awards Won", value: 15 },
];

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const incrementTime = 2000 / end; // 2 seconds animation
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span className="text-4xl font-bold text-blue-600">{count}</span>;
};

const AboutUs = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Banner */}
        <div className="relative w-full h-64 md:h-80 bg-gray-300 rounded-b-3xl overflow-hidden shadow-lg mb-12">
          <img
            src="https://t3.ftcdn.net/jpg/05/06/32/62/360_F_506326245_2GtSGEjKLDtpHS0FSkEBs4gV34DmTtS5.jpg"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            {/* <h1 className="text-3xl md:text-5xl text-white font-bold">About Us</h1> */}
          </div>
        </div>

        {/* Achievements Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 text-center">
          {achievements.map((ach, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <AnimatedCounter value={ach.value} />
              <p className="mt-2 text-gray-600 font-medium">{ach.label}</p>
            </div>
          ))}
        </div>

        {/* Company Profile */}
        <div className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Company</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">Your Company Name</span>! 
            We are a leading real estate developer delivering high-quality residential 
            and commercial projects across major cities. Our focus is on innovation, 
            sustainability, and customer satisfaction.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="my-12 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To create comfortable, sustainable, and affordable living spaces that 
              enhance the quality of life for our clients.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be recognized as a trusted and innovative real estate company, 
              known for excellence in construction, design, and customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
