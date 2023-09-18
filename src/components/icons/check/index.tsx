"use client";

import { motion } from "framer-motion";
import { IconWithColor } from "../arrow";

const CheckIcon = ({ size, color = "#000000" }: IconWithColor) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <motion.path
          animate={{ pathLength: 1 }}
          initial={{ pathLength: 0 }}
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></motion.path>{" "}
      </g>
    </svg>
  );
};

export default CheckIcon;
