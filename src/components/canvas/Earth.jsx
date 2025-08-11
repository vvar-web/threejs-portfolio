import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = React.memo(() => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
});

const EarthCanvas = () => {
  // Memoize the camera configuration to prevent recreating it on every render
  const cameraConfig = useMemo(() => ({
    fov: 45,
    near: 0.1,
    far: 200,
    position: [-4, 3, 6],
  }), []);

  // Memoize the canvas props
  const canvasProps = useMemo(() => ({
    shadows: true,
    frameloop: 'demand',
    dpr: [1, 2],
    gl: { preserveDrawingBuffer: true },
  }), []);

  return (
    <Canvas
      {...canvasProps}
      camera={cameraConfig}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default React.memo(EarthCanvas);