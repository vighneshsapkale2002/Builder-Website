// AdminLogin.jsx
import React, { useState } from "react";
import axios from "axios";

export default function AdminLogin({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/admin/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setAuth(true);
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <input className="border p-2 m-2" type="email" placeholder="Admin Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 m-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
