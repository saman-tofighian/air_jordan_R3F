import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Jordan({ color }) {
  const model = useGLTF("/shoe/air_jordan_1.glb");

  useEffect(() => {
    if (model.scene) {
      model.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.color.set(color);
        }
      });
    }
  }, [color]);

  return (
    <>
      <OrbitControls makeDefault minDistance={4} maxDistance={7} />
      <Stage>
        <primitive object={model.scene} scale={0.8} />
      </Stage>
    </>
  );
}
