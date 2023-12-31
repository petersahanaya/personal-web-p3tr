"use client";

import { scaleUpSidebarIcon } from "@/animations/scale";
import Center from "@component/center";
import Magnetic from "@component/magnetic";

import { useSidebar } from "@hooks/useSidebar";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const SidebarIcon = forwardRef<HTMLDivElement | null, { className?: string, }>(
  function SidebarIcon(props, ref) {
    const state = useSidebar();

    return (
      <motion.div
        ref={ref}
        variants={scaleUpSidebarIcon}
        animate="visible"
        initial="hidden"
        className={twMerge(
          `fixed right-[10px] top-[10px] z-50 h-[60px] w-[60px] md:right-[80px] md:top-[40px] ${props.className}`,
        )}
      >
        <Magnetic>
          <motion.button
            onClick={() => state.onPressedToggleSidebar(null)}
            whileHover={{ scale: 1.2 }}
            className="group h-full w-full rounded-full bg-gray-600 p-3 transition-colors hover:bg-gray-500"
          >
            <Center
              className={`flex-col justify-around gap-0 ${
                !state.open && "group-hover:gap-1"
              } transition-[1s]`}
            >
              <motion.div
                animate={{
                  rotate: state.open ? "45deg" : "0deg",
                  y: state.open ? 13 : 0,
                }}
                className="h-[2px] w-[80%] rounded-sm bg-white"
              ></motion.div>
              <motion.div
                animate={{
                  rotate: state.open ? "90deg" : "0deg",
                  scale: state.open ? 0 : 1,
                  opacity: state.open ? 0 : 1,
                }}
                className="h-[2px] w-[80%] rounded-sm bg-white"
              ></motion.div>
              <motion.div
                animate={{
                  rotate: state.open ? "-45deg" : "0deg",
                  y: state.open ? -10 : 0,
                }}
                className="h-[2px] w-[80%] rounded-sm bg-white"
              ></motion.div>
            </Center>
          </motion.button>
        </Magnetic>
      </motion.div>
    );
  },
);

export default SidebarIcon;
