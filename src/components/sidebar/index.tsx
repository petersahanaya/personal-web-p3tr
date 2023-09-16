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
    title: "Contact Me",
    href: "contact",
  },
];

const Sidebar = () => {
  const state = useSidebar();

  const onPressedRedirectToView = (href: string, idx: number) => {
    state.onPressedSetSelected(idx);

    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });

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
              className="fixed left-[50%] top-[50%] z-20 h-[80%] w-[80%] translate-x-[-50%] translate-y-[-45%] rounded-xl bg-stone-900 p-2"
            >
              <Spacing className="flex-col overflow-hidden">
                {sidebarContents.map((content, idx) => (
                  <motion.section
                    variants={fadeInLeft}
                    onClick={() => onPressedRedirectToView(content.href, idx)}
                    className="h-full w-full"
                    key={idx}
                  >
                    <Spacing
                      className={`cursor-pointer px-6 ${
                        idx !== 0 && "border-t-[1px] border-t-stone-600"
                      } group transition-all hover:scale-90 hover:px-8`}
                    >
                      <Heading
                        className={`text-7xl text-gray-500 transition-all group-hover:text-gray-200 ${
                          state.selected === idx && "text-gray-200"
                        }`}
                      >
                        {content.title}
                      </Heading>
                      <Heading
                        className={`text-5xl text-stone-700 transition-all group-hover:text-gray-400 ${
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
