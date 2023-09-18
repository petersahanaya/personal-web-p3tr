"use client";

import Spacing from "@component/spacing";
import Heading from "../heading";
import { description } from "@/app/(home)/content";
import ArrowIcon from "@icon/arrow";
import LinkedinIcon from "../icons/linkedin";
import GithubIcon from "../icons/github";

const Footer = () => {
  const onPressedRedirectTo = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="flex h-[400px] w-screen items-center justify-center border-t-[2px] border-t-stone-600 bg-[#141516] px-8 md:h-[300px] md:px-0">
      <Spacing className="flex-col justify-around gap-6 pt-3 md:flex-row md:gap-0">
        <Spacing className="flex-col items-start justify-center gap-3 md:items-center">
          <div>
            <Heading className="text-4xl text-white md:text-6xl">P3TR</Heading>
            <p className="w-full max-w-[260px] text-justify font-workSans text-sm text-stone-400">
              Dedicated to bring more business sales with stunning web design
              and result driving marketing systems.
            </p>
            <Spacing className="mt-3 h-max w-full justify-start gap-3">
              <p className="font-workSans text-sm text-slate-200">
                © Copyrights {new Date(Date.now()).getFullYear()}
              </p>

              <a href="https://linkedin.com/in/peter-sahanaya" target="_blank">
                <LinkedinIcon size={30} />
              </a>
              <a href="https://github.com/in/petersahanaya" target="_blank">
                <GithubIcon size={30} />
              </a>
            </Spacing>
          </div>
        </Spacing>

        <Spacing className=" flex-col items-center justify-center gap-3">
          <Spacing className="  flex-col items-start justify-center gap-3 md:items-center">
            <button
              onClick={() => onPressedRedirectTo("home")}
              className="font-workSans text-stone-100 transition-all hover:scale-110"
            >
              <Spacing className="justify-center gap-3">
                <div className="animate-bounce rotate-[-90deg]">
                  <ArrowIcon size={40} />
                </div>
                <p>Back to top</p>
              </Spacing>
            </button>
            <button
              onClick={() => onPressedRedirectTo("home")}
              className="font-workSans text-stone-400 transition-colors hover:text-stone-100"
            >
              <Spacing className="justify-center gap-3">
                <p>Home</p>
              </Spacing>
            </button>
            <button
              onClick={() => onPressedRedirectTo("work")}
              className="font-workSans text-stone-400 transition-colors hover:text-stone-100"
            >
              <Spacing className="justify-center gap-3">
                <p>Works</p>
              </Spacing>
            </button>
          </Spacing>
        </Spacing>
      </Spacing>
    </footer>
  );
};

export default Footer;
