"use client";
import WorkTogetherButton from "@component/button/together";
import ArrowIcon from "@icon/arrow";
import Magnetic from "@component/magnetic";
import Spacing from "@component/spacing";
import TextField from "@component/textField";
import Center from "@component/center";

import { fadeIn, fadeUp, fadeUpTitle } from "@animation/fade";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const title = "Let's work together!";
const description = `feel free if you want to contact me, to discuss further about your project!`;

const Contact = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const inView = useInView(containerRef);

  return (
    <main
      ref={containerRef}
      id="contact"
      className="h-screen w-screen  bg-[#141516] px-14 pt-20"
    >
      <Center className="flex-col">
        <section className="flex items-center gap-3 overflow-hidden">
          {title.split(" ").map((word, idx) => (
            <motion.h2
              variants={fadeUpTitle}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              custom={idx}
              key={idx}
              className="text-8xl text-white"
            >
              {word}
            </motion.h2>
          ))}
        </section>

        <section className="flex items-center gap-2 flex-wrap overflow-hidden">
          {description.split(" ").map((word, idx) => (
            <motion.p
              key={idx}
              variants={fadeUp}
              custom={idx}
              animate={inView ? "visible" : "hidden"}
              initial="hidden"
              className="max-w-[700px] text-start font-workSans text-md text-stone-300"
            >
              {word}
            </motion.p>
          ))}
        </section>

        <motion.form
          variants={fadeIn}
          animate={inView ? "visible" : "hidden"}
          initial="hidden"
          className="w-full max-w-[600px] flex flex-col gap-3 pt-3"
        >
          <div className="flex gap-3 items-center">
            <TextField hint="Username" type="text" />
            <TextField hint="Email" type="email" />
          </div>
          <TextField hint="Description" type="text" className="w-full" />

          <WorkTogetherButton className="w-full rounded-md">
            <Magnetic custom={0.7}>
              <Spacing className="px-7 justify-start gap-3">
                <ArrowIcon size={40} />

                <p className="uppercase text-sm">Go with it</p>
              </Spacing>
            </Magnetic>
          </WorkTogetherButton>
        </motion.form>
      </Center>
    </main>
  );
};

export default Contact;
