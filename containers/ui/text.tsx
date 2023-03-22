import { motion } from "framer-motion";

const baseVariant = {
  initial: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
  exit: {},
  hover: { y: 0, x: 0 },
};

const Text = () => {
  return (
    <motion.div
      initial="initial"
      animate="visible"
      exit="exit"
      variants={baseVariant}
      className="mt-8 max-w-[720px] text-xl"
    >
      Memory is but a fleeting blur, a transitory glimpse of the world before it
      fades into the oblivion of the forgotten.
    </motion.div>
  );
};

export default Text;
