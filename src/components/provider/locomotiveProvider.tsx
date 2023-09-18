"use client";

import { ReactChildren } from "@type/type";
import PreLoader from "@component/preloader";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LocomotiveProvider = ({ children }: ReactChildren) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
        resetNativeScroll: true,
      });
    })();

    setTimeout(() => {
      setLoading(false);

      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => {
      scroll && scroll.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <PreLoader />}</AnimatePresence>

      {children}
    </>
  );
};

export default LocomotiveProvider;
