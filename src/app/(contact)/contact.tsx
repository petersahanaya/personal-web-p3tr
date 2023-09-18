"use client";
import Center from "@component/center";

import { fadeUp, fadeUpTitle } from "@animation/fade";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Form from "@/components/form";

const title = "Let's work together!";
const description = `feel free if you want to contact me, to discuss further about your project!`;

const Contact = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const inView = useInView(containerRef);

  return (
    <main
      ref={containerRef}
      id="contact"
      className="w-screen bg-[#141516] px-6 pb-12 pt-20 md:px-14"
    >
      <Center className="flex-col justify-start xs:justify-start md:justify-center">
        <section className="flex flex-wrap items-start gap-3 overflow-hidden xs:justify-start md:flex-nowrap md:items-center">
          {title.split(" ").map((word, idx) => (
            <motion.h2
              variants={fadeUpTitle}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              custom={idx}
              key={idx}
              className="text-7xl text-white xs:text-[5rem] md:text-8xl"
            >
              {word}
            </motion.h2>
          ))}
        </section>

        <section className="flex flex-wrap items-center gap-2 overflow-hidden xs:px-5">
          {description.split(" ").map((word, idx) => (
            <motion.p
              key={idx}
              variants={fadeUp}
              custom={idx}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              className="md:text-md max-w-[700px] text-start font-workSans text-sm text-stone-300 xs:text-lg"
            >
              {word}
            </motion.p>
          ))}
        </section>

        <Form />
      </Center>
    </main>
  );
};

export default Contact;
