"use client";

import { ReactChildrenWithClass } from "@type/type";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Heading = forwardRef<HTMLHeadingElement | null, ReactChildrenWithClass>(
  function Heading(props, ref) {
    return (
      <h1
        ref={ref}
        className={twMerge(
          `font-bebasNeue text-4xl text-black ${props.className}`,
        )}
      >
        {props.children}
      </h1>
    );
  },
);

export default Heading;
