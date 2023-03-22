import { NextPage } from "next";
import Memories from "@/containers/ui/memories";
import Text from "@/containers/ui/text";
import { motion } from "framer-motion";
import { cn } from "@/utils/tailwind";

const Home: NextPage = () => {
  return (
    <div
      className={cn(
        "flex w-screen flex-col items-center justify-center align-middle",
      )}
    >
      <Memories />
      <Text />
    </div>
  );
};

export default Home;
