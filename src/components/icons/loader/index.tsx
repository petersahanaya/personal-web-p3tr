"use client";

import { IconWithColor } from "../arrow";

const LoaderIcon = ({ size, color = "#000000" }: IconWithColor) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path fill="none" d="M0 0h24v24H0z"></path>{" "}
          <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export default LoaderIcon;
