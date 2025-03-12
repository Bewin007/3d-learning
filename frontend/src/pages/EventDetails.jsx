import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("http://localhost:8000/user/event/", { event_id: id })
      .then(response => setEvent(response.data))
      .catch(error => console.error("Error fetching event details:", error));
  }, [id]);

  if (!event) return <p>Loading event details...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <h2 className="text-lg text-gray-700">{event.sub_title}</h2>
      <p className="mt-4 text-gray-600">{event.description}</p>
      <button 
        onClick={() => navigate("/model", { state: { modelPath: event.model } })} 
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        View 3D Model
      </button>
    </div>
  );
};

export default EventDetails;
