"use client";

import { MutableRefObject, useEffect, useRef } from "react";

type useViewProps = {
  container: MutableRefObject<null>;
  options?: IntersectionObserverInit;
};

function useView({ container, options }: useViewProps) {
  const inView = useRef(false);

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        inView.current = entry.isIntersecting;
      });
    }, options);

    observer.observe(container.current!);

    return () => {
      observer.disconnect();
    };
  }, [container, options]);

  return inView.current;
}

export default useView;
