"use client";

import { ReactChildrenWithClass } from "@type/type";
import { twMerge } from "tailwind-merge";

const Center = ({ children, className }: ReactChildrenWithClass) => {
  return (
    <div
      className={twMerge(
        `flex h-full w-full items-center justify-center ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default Center;
