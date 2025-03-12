import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsList from "./pages/EventsList";
import EventDetails from "./pages/EventDetails";
import ModelViewer from "./pages/ModelViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsList />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/model" element={<ModelViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
