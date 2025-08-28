import React, { useState } from "react";

// Mock Data
let initialProjects = [
  { id: 1, name: "Skyline Residency", location: "Pune", price: 4500000 },
  { id: 2, name: "Green Valley Towers", location: "Mumbai", price: 6000000 },
];

let initialEnquiries = [
  { id: 1, name: "John Doe", email: "john@example.com", message: "Interested in 2BHK" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", message: "Need more info on Skyline Residency" },
];

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState(initialProjects);
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [newProject, setNewProject] = useState({ name: "", location: "", price: "" });

  // Simple admin login (demo)
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // Add Project
  const handleAddProject = () => {
    const id = projects.length + 1;
    setProjects([...projects, { id, ...newProject }]);
    setNewProject({ name: "", location: "", price: "" });
  };

  // Delete Project
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
          onSubmit={handleLogin}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-4 border rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Manage Projects */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Manage Projects</h2>

        <div className="flex gap-3 mb-4 flex-wrap">
          <input
            type="text"
            placeholder="Project Name"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            value={newProject.location}
            onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Price"
            value={newProject.price}
            onChange={(e) => setNewProject({ ...newProject, price: e.target.value })}
            className="p-2 border rounded-lg"
          />
          <button
            onClick={handleAddProject}
            className="bg-green-600 text-white px-4 rounded-lg hover:bg-green-700 transition"
          >
            Add Project
          </button>
        </div>

        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td className="p-3">{p.location}</td>
                <td className="p-3">₹{p.price.toLocaleString()}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDeleteProject(p.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Manage Enquiries */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Manage Enquiries</h2>
        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id} className="border-t">
                <td className="p-3">{e.name}</td>
                <td className="p-3">{e.email}</td>
                <td className="p-3">{e.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
