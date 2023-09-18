"use client";

import { twMerge } from "tailwind-merge";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormState } from "@/types/type";

type TextFieldProps = {
  hint: string;
  type: "email" | "text";
  className?: string;
  name: "username" | "email" | "message";
  register: UseFormRegister<FormState>;
  errors: FieldErrors<FormState>;
};

const TextField = ({
  hint,
  type,
  name,
  className,
  register,
  errors,
}: TextFieldProps) => {
  return (
    <div className="flex h-max w-full flex-col gap-3">
      <input
        {...register(name)}
        name={name}
        className={twMerge(
          `w-full rounded-md bg-stone-300/80 p-4 px-6 font-workSans text-white outline-none backdrop-blur-sm placeholder:text-sm placeholder:uppercase placeholder:text-stone-700 ${className}`,
        )}
        type={type}
        placeholder={hint}
      />
      {errors[name] && errors[name]?.message ? (
        <p className="font-workSans text-xs text-red-500 md:text-sm">
          {errors[name]?.message}
        </p>
      ) : null}
    </div>
  );
};

export default TextField;
