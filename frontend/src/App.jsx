// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import EventsList from "./pages/EventsList";
import Home from "./pages/Home";
import Register from "./pages/Register";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/event" element={<EventsList />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
