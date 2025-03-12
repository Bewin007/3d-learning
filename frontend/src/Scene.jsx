import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Model = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loader = new OBJLoader();
    loader.load(
      "/models/test.obj",
      (obj) => {
        setModel(obj);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("Error loading model", error);
      }
    );
  }, []);

  return model ? <primitive object={model} scale={0.5} /> : null;
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
