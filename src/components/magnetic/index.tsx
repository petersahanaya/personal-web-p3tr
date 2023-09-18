"use client";

import gsap from "gsap";
import React, { ReactElement, forwardRef, useEffect } from "react";
import { useRef } from "react";

export type MagneticProps = {
  children: ReactElement;
  custom?: number;
};

const Magnetic = forwardRef<HTMLElement | null, MagneticProps>(
  function MagneticButton({ children, custom = 0.5 }, ref) {
    const magneticRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      const xTo = gsap.quickTo(magneticRef.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magneticRef.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      magneticRef.current?.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;

        const { width, height, left, top } =
          magneticRef.current!.getBoundingClientRect();

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        xTo(x * custom);
        yTo(y * custom);
      });

      magneticRef.current?.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });
    }, [custom]);

    return React.cloneElement(children, { ref: magneticRef });
  },
);

export default Magnetic;
