"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Center from "@component/center";
import Card from "@component/card";

import Description from "./description";

const dummyWorks = [
  {
    title: "P3DAS",
    image: "/Shop.png",
    categories: ["Next Js", "Node Js", "Restful Api", "Prisma ORM"],
    description:
      "Bringing aesthetic, easily-editable, no-code websites to life at lightning speed with your favored designs.",
  },
  {
    title: "P3TR",
    image: "/Personal.png",
    categories: ["Next Js", "Typescript", "Three Js", "Tailwind Css"],
    description:
      "Creating web and app designs from scratch and molding them into research led, user-friendly products.",
  },
];

const Works = () => {
  return (
    <main id="works" className="w-screen bg-white pb-24 pt-10">
      <section className="h-full w-full">
        <Center className="flex-col items-start justify-start gap-12 px-14">
          {/* <Description /> */}

          <section className="mt-8 grid justify-items-center h-full w-full gap-3">
            {dummyWorks.map((work, idx) => (
              <Card key={idx} {...work} />
            ))}
          </section>
        </Center>
      </section>
    </main>
  );
};

export default Works;
