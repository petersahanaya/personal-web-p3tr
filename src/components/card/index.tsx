"use client";

import { Work } from "@type/type";
import Magnetic from "@component/magnetic";
import Spacing from "@component/spacing";

import { useRef } from "react";

import ShortArrowIcon from "@icon/arrow/shortArrow";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "@animation/fade";

const Card = (work: Work) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const inView = useInView(containerRef, { once: true });

  return (
    <motion.section
      ref={containerRef}
      variants={fadeIn}
      animate={inView ? "visible" : "hidden"}
      initial="hidden"
      className="flex w-full items-start justify-around gap-8"
    >
      <div className="relative h-[400px] w-[50%] overflow-hidden rounded-3xl">
        <Image
          className="object-cover"
          src={work.image}
          alt={work.title}
          fill
        />
      </div>

      <section className="p-3">
        <main>
          <Spacing className="">
            <h2 className="text-7xl text-stone-700">{work.title}</h2>
            <Magnetic>
              <button className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-neutral-700 p-2">
                <Magnetic>
                  <ShortArrowIcon size={30} color="#ffffff" />
                </Magnetic>
              </button>
            </Magnetic>
          </Spacing>

          <div className="mt-2 flex flex-wrap items-center justify-start gap-2">
            {work.categories.map((category, idx) => (
              <button
                className="w-[140px] rounded-full bg-stone-300/70 p-2 font-workSans text-sm font-[400] uppercase text-stone-600 backdrop-blur-md"
                key={idx}
              >
                {category}
              </button>
            ))}
          </div>
        </main>
        <p className="mt-6 text-justify font-workSans text-stone-700">
          {work.description}
        </p>
      </section>
    </motion.section>
  );
};

export default Card;
