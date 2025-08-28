import React, { useState } from "react";

const allProjects = [
  {
    id: 1,
    name: "Skyline Residency",
    location: "Pune",
    price: 4500000,
    config: ["1BHK", "2BHK", "3BHK"],
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Green Valley Towers",
    location: "Mumbai",
    price: 6000000,
    config: ["2BHK", "3BHK"],
    image:
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Riverfront Heights",
    location: "Nagpur",
    price: 3500000,
    config: ["1BHK", "2BHK"],
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Sunrise Meadows",
    location: "Bangalore",
    price: 5500000,
    config: ["2BHK", "3BHK"],
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Elite Square",
    location: "Hyderabad",
    price: 8000000,
    config: ["3BHK"],
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Palm Grove",
    location: "Chennai",
    price: 4000000,
    config: ["1BHK", "2BHK"],
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Golden Horizon",
    location: "Delhi",
    price: 7000000,
    config: ["2BHK", "3BHK"],
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Silverline Enclave",
    location: "Pune",
    price: 5000000,
    config: ["1BHK", "2BHK"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState(allProjects);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState([3000000, 9000000]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Apply filters
  const applyFilters = (configFilter, locationFilter, sortOption, budgetRange) => {
    let filtered = allProjects;

    if (configFilter) filtered = filtered.filter((p) => p.config.includes(configFilter));
    if (locationFilter) filtered = filtered.filter((p) => p.location === locationFilter);
    if (budgetRange) filtered = filtered.filter((p) => p.price >= budgetRange[0] && p.price <= budgetRange[1]);
    if (sortOption === "low-high") filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (sortOption === "high-low") filtered = [...filtered].sort((a, b) => b.price - a.price);

    setProjects(filtered);
  };

  const handleFilter = (config) => {
    setFilter(config);
    applyFilters(config, location, sort, budget);
  };

  const handleLocation = (loc) => {
    setLocation(loc);
    applyFilters(filter, loc, sort, budget);
  };

  const handleSort = (value) => {
    setSort(value);
    applyFilters(filter, location, value, budget);
  };

  const handleBudgetChange = (e, index) => {
    const newBudget = [...budget];
    newBudget[index] = parseInt(e.target.value);
    setBudget(newBudget);
    applyFilters(filter, location, sort, newBudget);
  };

  const locations = [...new Set(allProjects.map((p) => p.location))];

  // Open modal
  const openModal = (index) => {
    setActiveProjectIndex(index);
    setModalOpen(true);
  };

  // Navigate slideshow
  const nextSlide = () => setActiveProjectIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setActiveProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Filters + Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 flex-wrap">
          <div className="flex gap-3 flex-wrap">
            {["1BHK", "2BHK", "3BHK"].map((bhk) => (
              <button
                key={bhk}
                onClick={() => handleFilter(bhk)}
                className={`px-4 py-2 rounded-lg ${
                  filter === bhk ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {bhk}
              </button>
            ))}
            <button
              onClick={() => handleFilter("")}
              className={`px-4 py-2 rounded-lg ${
                filter === "" ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              All
            </button>
          </div>

          {/* Location Filter */}
          <select
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            value={location}
            onChange={(e) => handleLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Sorting */}
          <select
            className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
            value={sort}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>

          {/* Budget Range */}
          <div className="flex flex-col items-start">
            <label className="text-gray-700 dark:text-gray-200 font-medium mb-1">
              Budget: ₹{budget[0].toLocaleString()} - ₹{budget[1].toLocaleString()}
            </label>
            <div className="flex gap-3">
              <input type="range" min="3000000" max="9000000" step="500000" value={budget[0]} onChange={(e) => handleBudgetChange(e, 0)} />
              <input type="range" min="3000000" max="9000000" step="500000" value={budget[1]} onChange={(e) => handleBudgetChange(e, 1)} />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
                onClick={() => openModal(index)}
              >
                <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">{project.location}</p>
                  <p className="text-blue-600 font-bold mb-2">Starting ₹{project.price.toLocaleString()}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Configurations: {project.config.join(", ")}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-300 col-span-3">No projects found in this range.</p>
          )}
        </div>
      </div>

      {/* Modal for Slideshow */}
      {modalOpen && projects.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-xl w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 text-xl font-bold"
              onClick={() => setModalOpen(false)}
            >
              ✖
            </button>

            <img
              src={projects[activeProjectIndex].image}
              alt={projects[activeProjectIndex].name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{projects[activeProjectIndex].name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">{projects[activeProjectIndex].location}</p>
            <p className="text-blue-600 font-bold mb-2">Starting ₹{projects[activeProjectIndex].price.toLocaleString()}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Configurations: {projects[activeProjectIndex].config.join(", ")}
            </p>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={prevSlide}
                className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
              >
                Previous
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
