"use client";

import Magnetic from "@component/magnetic";
import { ReactChildrenWithClass } from "@/types/type";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { scaleUp } from "@animation/scale";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  custom?: number;
  onClick?: () => void;
} & ReactChildrenWithClass;

const WorkTogetherButton = forwardRef<HTMLButtonElement | null, ButtonProps>(
  function WorkTogether(
    { children, className, custom = 0.3, onClick = () => {} },
    ref,
  ) {
    return (
      <Magnetic custom={custom} ref={ref}>
        <motion.button
          aria-label="Button"
          onClick={onClick}
          variants={scaleUp}
          animate="visible"
          initial="hidden"
          className={twMerge(
            `relative h-[70px] w-[180px] overflow-hidden rounded-full bg-stone-300/70 font-workSans text-white backdrop:blur-md  ${className}`,
          )}
        >
          {children}
        </motion.button>
      </Magnetic>
    );
  },
);

export default WorkTogetherButton;
