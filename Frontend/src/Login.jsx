import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", form);
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful! 🎉");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 w-full mb-3"/>
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 w-full mb-3"/>
        <button className="bg-green-500 text-white p-2 w-full">Login</button>
        {message && <p className="mt-2 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
