import { NextPage } from "next";
import Scene from "@/containers/three/scene";
import { cn } from "@/utils/tailwind";

const Home: NextPage = () => {
  return (
    <div
      className={cn(
        "flex h-[100%] w-screen items-center justify-center align-middle",
      )}
    >
      <Scene />
    </div>
  );
};

export default Home;
