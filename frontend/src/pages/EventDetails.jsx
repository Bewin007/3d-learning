import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:8000/user/event/", { event_id: id })
      .then((response) => {
        setEvent(response.data);
        if (response.data.model) {
          loadModel(`http://localhost:8000/user${response.data.model}`);
        }
      })
      .catch((error) => console.error("Error fetching event details:", error));
  }, [id]);

  const loadModel = (modelPath) => {
    const loader = new OBJLoader();
    loader.load(
      modelPath,
      (obj) => setModel(obj),
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (error) => console.error("Error loading model:", error)
    );
  };

  if (!event) return <p>Loading event details...</p>;

  return (
    <div className="p-4">
      {/* Event Details */}
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <h2 className="text-lg text-gray-700">{event.sub_title}</h2>
      <p className="mt-4 text-gray-600">{event.description}</p>

      {/* 3D Model Viewer with Border */}
      {model ? (
        <div className="mt-6 w-full h-[500px] border-2 border-gray-300 rounded-lg p-2 shadow-lg">
          <Canvas camera={{ position: [0, 2, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <Bounds fit clip observe margin={1.2}>
              <primitive object={model} />
            </Bounds>
            <OrbitControls />
          </Canvas>
        </div>
      ) : (
        <p className="mt-4 text-gray-500">No 3D model available for this event.</p>
      )}
    </div>
  );
};

export default EventDetails;
