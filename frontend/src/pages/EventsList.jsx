import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/user/event/")
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  const handleClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Events</h1>
      {events.map(event => (
        <div 
          key={event.id} 
          className="p-4 border rounded-lg mb-2 cursor-pointer shadow"
          onClick={() => handleClick(event.id)}
        >
          <h2 className="text-lg font-semibold">{event.title}</h2>
          <p className="text-gray-600">{event.sub_title}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
