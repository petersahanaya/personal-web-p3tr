"use client";

import Spacing from "@component/spacing";
import Heading from "@component/heading";
import Blur from "@component/blur";

import { useSidebar } from "@hooks/useSidebar";

import { AnimatePresence, motion } from "framer-motion";
import { fadeIn, fadeInLeft } from "@animation/fade";

const sidebarContents = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Works",
    href: "works",
  },
  {
    title: "Resume",
    href: "https://linkedin.com/in/peter-sahanaya",
  },
  {
    title: "Contact Me",
    href: "contact",
  },
];

const Sidebar = () => {
  const state = useSidebar();

  const onPressedRedirectToView = (href: string, idx: number) => {
    state.onPressedSetSelected(idx);

    if (href !== sidebarContents[2].href) {
      document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = sidebarContents[2].href;
    }

    state.onPressedToggleSidebar();
  };

  return (
    <>
      <AnimatePresence>
        {state.open && (
          <>
            <Blur />

            <motion.aside
              variants={fadeIn}
              animate="visible"
              initial="hidden"
              exit="hidden"
              className="fixed left-0 top-0 z-20 h-full w-full bg-stone-900 p-2 md:left-[50%] md:top-[50%] md:h-[80%] md:w-[80%] md:translate-x-[-50%] md:translate-y-[-45%] md:rounded-xl"
            >
              <Spacing className="mt-20 flex-col justify-start overflow-hidden md:mt-0 md:justify-between">
                {sidebarContents.map((content, idx) => (
                  <motion.section
                    variants={fadeInLeft}
                    onClick={() => onPressedRedirectToView(content.href, idx)}
                    className="h-max w-full md:h-full"
                    key={idx}
                  >
                    <Spacing
                      className={`px-2 md:justify-between ${
                        idx !== 0 && "md:border-t-[1px] md:border-t-stone-600"
                      } group transition-all hover:scale-90 hover:px-8`}
                    >
                      <Heading
                        className={`text-7xl text-gray-500 transition-all group-hover:text-gray-200 xs:text-8xl md:text-7xl ${
                          state.selected === idx && "text-gray-200"
                        }`}
                      >
                        {content.title}
                      </Heading>
                      <Heading
                        className={`hidden text-stone-700 transition-all group-hover:text-gray-400 md:inline-block md:text-5xl ${
                          state.selected === idx && "text-gray-400"
                        }`}
                      >
                        {(idx + 1).toString().padStart(2, "0")}
                      </Heading>
                    </Spacing>
                  </motion.section>
                ))}
              </Spacing>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
