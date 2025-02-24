import { Canvas } from "@react-three/fiber";
import Jordan from "./components/jordan/Jordan";
import gsap from "gsap";
import { useState } from "react";

function App() {
  const [shoeColor, setShoeColor] = useState("white");
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (newShoeColor, newBgColor) => {
    setShoeColor(newShoeColor);
    setBgColor(newBgColor);
    gsap.to(document.body, { duration: 1.5, background: newBgColor });
  };

  return (
    <>
      <div className="btn">
        <button onClick={() => changeColor("#f71b52", "#c95f62")}></button>
        <button onClick={() => changeColor("#1084e3", "#a1c9e3")}></button>
        <button onClick={() => changeColor("#3acc27", "#7fc47659")}></button>
        <button onClick={() => changeColor("#c912a8", "#e4c2f0")}></button>
      </div>
      <Canvas
        gl={{ antialias: true }}
        camera={{ fov: 75, position: [0, 0, 6] }}
      >
        <Jordan color={shoeColor} />
      </Canvas>
    </>
  );
}

export default App;
