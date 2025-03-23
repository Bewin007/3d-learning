import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    register_no: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/user/register/", formData);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md w-80">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3"
          required
        />
        <input
          type="text"
          name="register_no"
          placeholder="Register Number"
          value={formData.register_no}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-3"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
