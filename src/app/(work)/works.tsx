"use client";
import Center from "@component/center";
import Card from "@component/card";

const dummyWorks = [
  {
    title: "P3DAS",
    image: "/P3Das.png",
    href: "https://p3das.vercel.app",
    categories: ["Next Js", "Node Js", "Restful Api", "Zustand", "Prisma ORM"],
    description:
      "P3das is a eCommerce web application, built with Next Js and other modern technology. I got this inspiration from Adidas Website.",
  },
  {
    title: "P3MUSIC",
    image: "/P3Music.png",
    href: "https://p3music.vercel.app",
    categories: [
      "Next Js",
      "Typescript",
      "MongoDB",
      "Prisma ORM",
      "Restful API",
    ],
    description:
      "P3music is a music streaming web application, built with Next Js and other modern technology. I got this inspiration from Spotify Website.",
  },
];

const Works = () => {
  return (
    <main id="works" className="w-screen bg-white pb-24 pt-10">
      <section className="h-full w-full">
        <Center className="flex-col items-start justify-start gap-12 px-3 md:px-14">
          <section className="mt-8 grid h-full w-full justify-items-center gap-8 md:gap-3">
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
