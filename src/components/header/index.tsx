"use client";

import Spacing from "@component/spacing";
import Magnetic from "@component/magnetic";
import SidebarIcon from "@icon/sidebar";
import Link from "next/link";

import { fadeUp } from "@animation/fade";
import { useSidebar } from "@hooks/useSidebar";

import { Fragment, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//bg-stone-500/60 backdrop-blur-md

const sidebarContents = [
  {
    title: "Resume",
    href: "https://linkedin.com/in/peter-sahanaya",
  },
  {
    title: "Works",
    href: "works",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

const Header = () => {
  const onPressedSetSelected = useSidebar(
    (state) => state.onPressedSetSelected,
  );

  const onPressedToggleSidebar = useSidebar(
    (state) => state.onPressedToggleSidebar,
  );

  const buttonRef = useRef(null);
  const actionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(buttonRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(buttonRef.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });

          onPressedToggleSidebar(false);
        },
      },
    });
  }, [onPressedToggleSidebar]);

  const onPressedRedirectTo = (idx: number, href: string) => {
    onPressedSetSelected(idx);

    if (href !== sidebarContents[0].href) {
      document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = sidebarContents[0].href;
    }
  };

  return (
    <>
      <header className="mx-auto h-[11vh] w-[90%] rounded-xl bg-stone-200/50 px-8 backdrop-blur-sm md:w-[70%]">
        <Spacing className="justify-between p-2">
          <Link href="/" className="flex-1 text-6xl text-white">
            P
          </Link>

          <Spacing
            ref={actionRef}
            className="hidden h-full w-[80%] justify-between gap-3 md:flex md:w-max"
          >
            {sidebarContents.map(({ title, href }, idx) => (
              <Fragment key={idx}>
                <Magnetic>
                  <motion.h1
                    onClick={() => onPressedRedirectTo(idx, href)}
                    variants={fadeUp}
                    animate={"visible"}
                    initial="hidden"
                    custom={idx}
                    className="group relative  font-workSans text-sm font-[400]  text-white md:text-[1rem]"
                  >
                    {title}
                    <div className="absolute bottom-[-10px] left-[50%] h-[5px] w-[5px] translate-x-[-50%] scale-0 rounded-full bg-white transition-all group-hover:scale-100"></div>
                  </motion.h1>
                </Magnetic>
              </Fragment>
            ))}
          </Spacing>
        </Spacing>
      </header>
      <SidebarIcon className="right-[35px] top-[15px] z-50 inline-block scale-90 md:hidden" />
      <SidebarIcon className="hidden scale-0 md:inline-block" ref={buttonRef} />
    </>
  );
};

export default Header;
