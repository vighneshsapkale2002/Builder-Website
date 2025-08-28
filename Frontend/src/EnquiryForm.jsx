import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const projects = [
    "Skyline Residency",
    "Green Valley Towers",
    "Riverfront Heights",
    "Sunrise Meadows",
    "Elite Square",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  //   setSubmitted(true);
  //   setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  // };


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  } catch (err) {
    console.error("Error submitting enquiry:", err);
  }
};


  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Enquire Now</h2>

        {submitted && (
          <div className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 p-4 mb-6 rounded-lg text-center">
            Thank you! Your enquiry has been submitted.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          >
            <option value="">Select Project</option>
            {projects.map((proj, idx) => (
              <option key={idx} value={proj}>
                {proj}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
