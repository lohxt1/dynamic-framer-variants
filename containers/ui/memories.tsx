import { motion } from "framer-motion";
import { cn } from "@/utils/tailwind";

const scale = 15;

// greater the number, greater the distortion
const memories = [
  1, 4, 3, 5, 3, 4, 3, 4, 3, 1,
  // -
  1, 5, 4, 3, 5, 3, 3, 3, 3, 1,
  // -
  1, 4, 5, 4, 3, 3, 3, 3, 3, 1,
  // -
  1, 3, 4, 2, 8, 5, 9, 1, 5, 1,
  // -
  1, 3, 3, 2, 8, 8, 1, 2, 2, 2,
  // -
  1, 3, 3, 2, 7, 9, 2, 0, 0, 0,
  // -
  1, 3, 3, 2, 2, 5, 2, 0, 0, 0,
  // -
  1, 3, 3, 2, 2, 1, 2, 0, 0, 0,
]
  .map((_) => _ * scale)
  .map((val, idx) => ({
    outer: {
      initial: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.03 * idx,
          duration: 0.5,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
      exit: {},
      hover: {},
      value: val,
    },
    inner: {
      initial: { opacity: 1, y: 0, x: 0, background: `#f500` },
      visible: {
        opacity: 1,
        y: Math.random() * val - val / 2,
        x: Math.random() * val - val / 2,
        background: val == 0 ? `#f50` : `#f500`,
        transition: {
          delay: 0.03 * idx + 2.5,
          duration: 1.5,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
      exit: {},
      hover: {},
      value: val,
    },
  }));

const baseVariant = {
  initial: {},
  visible: {},
  exit: {},
  hover: {},
};

const Memories = () => {
  return (
    <div className="relative flex w-[720px] flex-wrap">
      {memories.map((_) => (
        <motion.div
          className="relative m-[1px] h-[70px] w-[70px]"
          initial="initial"
          animate="visible"
          exit="exit"
          variants={baseVariant}
        >
          <motion.div
            className="relative m-[1px] h-[70px] w-[70px]"
            initial="initial"
            animate="visible"
            exit="exit"
            variants={_?.outer}
          >
            <motion.div
              className={cn(
                "absolute h-[70px] w-[70px] rounded-full",
                "border border-[#f50]",
              )}
              variants={_?.inner}
            ></motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Arrows */}
      <div className="absolute bottom-[-20px] right-[0px] font-black">→</div>
      <div className="absolute bottom-[0px] right-[-20px] rotate-90 font-black">
        →
      </div>
      <div className="absolute bottom-[-20px] left-[0px] font-black">→</div>
      <div className="absolute bottom-[0px] left-[-20px] rotate-90 font-black">
        →
      </div>
      <div className="absolute top-[0px] left-[-20px] rotate-90 font-black">
        →
      </div>
      <div className="absolute top-[0px] right-[-20px] rotate-90 font-black">
        →
      </div>
    </div>
  );
};

export default Memories;
