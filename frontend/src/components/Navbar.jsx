import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("access_token"); // Check if token exists

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Remove token
    localStorage.removeItem("refresh_token"); // Remove refresh token (if stored)
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Event Viewer</h1>
      <div>
        <Link to="/event" className="mx-2 hover:underline">Home</Link>
        {!isAuthenticated ? (
          <Link to="/login" className="mx-2 hover:underline">Login</Link>
        ) : (
          <button onClick={handleLogout} className="mx-2 hover:underline">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
