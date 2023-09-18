"use client";

import Header from "@component/header";
import Spacing from "@component/spacing";
import Center from "@component/center";
import Magnetic from "@component/magnetic";
import ArrowIcon from "@icon/arrow";

import { fadeUp, fadeUpTitle } from "@animation/fade";
import { slideUpLanding } from "@animation/slide";

import { motion } from "framer-motion";
import WorkTogetherButton from "@component/button/together";
import React, { Fragment } from "react";

export const description = `I'm a passionate front end developer and ux designer dedicated to bring more business sales with stunning web design and result driving marketing systems.`;

const title = "Crafting Your 💡 Dream Ideas Into Masterpiece";

const Content = () => {
  return (
    <motion.section
      variants={slideUpLanding}
      animate="visible"
      initial="hidden"
      className="m-auto h-full w-full pt-2"
    >
      <Header />

      <Center className="h-[90%] flex-col md:h-[85%]">
        <Spacing className="hidden h-max w-[90%] flex-wrap items-center justify-between overflow-hidden md:flex md:w-[80%] md:justify-center md:gap-4">
          {title.split(" ").map((word, idx) => (
            <Fragment key={idx}>
              <motion.h3
                className={`h-max overflow-hidden pt-2 text-7xl text-white md:text-8xl`}
                variants={fadeUpTitle}
                custom={idx}
              >
                {word}
              </motion.h3>
            </Fragment>
          ))}
        </Spacing>
        <Spacing className="flex h-max w-[90%] flex-wrap items-center justify-between overflow-hidden md:hidden">
          <motion.h3
            className={`xs:text-8xl h-max pt-2 text-center text-7xl text-white`}
            variants={fadeUpTitle}
          >
            Crafting Your Dream Ideas 💡
          </motion.h3>
        </Spacing>

        <motion.section
          transition={{ delay: 1 }}
          className="xs:h-[80px] mt-3 flex h-[100px] w-[90%] flex-wrap items-center justify-center gap-1 overflow-hidden md:h-[80px] md:w-[60%] md:justify-center lg:h-[60px]"
        >
          {description.split(" ").map((word, idx) => (
            <motion.p
              variants={fadeUp}
              transition={{ delay: 2 }}
              custom={idx}
              key={idx}
              className="h-max w-max text-center font-workSans text-sm text-stone-100 "
            >
              {word}
            </motion.p>
          ))}
        </motion.section>

        <a href="https://linkedin.com/in/peter-sahanaya" target="_blank">
          <WorkTogetherButton className="mx-auto mt-10 w-[300px] md:mt-4">
            <Magnetic custom={0.3}>
              <motion.div
                variants={fadeUp}
                className="flex h-full w-full items-center justify-center gap-6"
              >
                <ArrowIcon size={40} color="#ffffff" />
                <p>Let&apos;s work together</p>
              </motion.div>
            </Magnetic>
          </WorkTogetherButton>
        </a>
      </Center>
    </motion.section>
  );
};

export default Content;
