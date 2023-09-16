"use client";

import { twMerge } from "tailwind-merge";

type TextFieldProps = {
  hint: string;
  type: "email" | "text";
  className?: string;
};

const TextField = ({ hint, type, className }: TextFieldProps) => {
  return (
    <input
      className={twMerge(
        `w-full p-4 rounded-md font-workSans placeholder:text-sm bg-stone-300/80 backdrop-blur-sm text-white placeholder:uppercase placeholder:text-stone-700 px-6 outline-none ${className}`
      )}
      type={type}
      placeholder={hint}
    />
  );
};

export default TextField;
