// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Event Viewer</h1>
      <p className="text-lg text-gray-700 mb-6">Experience interactive 3D event models</p>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
