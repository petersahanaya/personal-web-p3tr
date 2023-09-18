"use client";

import { useEffect, useRef } from "react";
import CursorIcon from "@icon/cursor";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      let x = e.clientX;
      let y = e.clientY;

      cursorRef.current!.style.left = `${x}px`;
      cursorRef.current!.style.left = `${x}px`;
      cursorRef.current!.style.top = `${y}px`;
      cursorRef.current!.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      className="fixed z-[999] hidden translate-x-[-10px] rotate-[-20deg] lg:inline-block"
      ref={cursorRef}
    >
      <CursorIcon size={30} />
    </div>
  );
};

export default Cursor;
