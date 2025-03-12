import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLocation } from "react-router-dom";

const ModelViewer = () => {
  const location = useLocation();
  const modelPath = location.state?.modelPath
    ? `http://localhost:8000/user${location.state.modelPath}`
    : null;
  const [model, setModel] = useState(null);

  useEffect(() => {
    if (!modelPath) return;

    const loader = new OBJLoader();
    loader.load(
      modelPath,
      (obj) => setModel(obj),
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (error) => console.error("Error loading model:", error)
    );
  }, [modelPath]);

  return (
    <div className=" overflow-hidden">
        
      <Canvas camera={{ position: [0, 2, 5] }} >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        {model && <primitive object={model} />}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
