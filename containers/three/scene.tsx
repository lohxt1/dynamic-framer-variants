import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "@/components/three/cube";

const Scene = () => {
  return (
    <Canvas
      shadows
      //   gl={{ antialias: false }}
      dpr={[1, 2]}
      camera={{ position: [0, 50, 100], fov: 50 }}
    >
      <ScrollControls damping={0.2} pages={3}>
        <Scroll>
          <Cube />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "10vh", left: "0.5em" }}>
            to
          </h1>
          <h1 style={{ position: "absolute", top: "120vh", left: "60vw" }}>
            be
          </h1>
          <h1
            style={{
              position: "absolute",
              top: "150vh",
              left: "0.5vw",
              fontSize: "40vw",
            }}
          >
            home
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Scene;
