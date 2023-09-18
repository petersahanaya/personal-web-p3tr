"use client";

import { useCallback } from "react";

import TextField from "@component/textField";
import Magnetic from "@component/magnetic";
import WorkTogetherButton from "@component/button/together";
import Spacing from "@component/spacing";
import ArrowIcon from "@icon/arrow";
import Loader from "@icon/loader";
import CheckIcon from "@icon/check";

import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import z from "zod";

import { FormState } from "@type/type";

const TEMPLATE_ID = "template_mipqken";
const SERVICE_ID = "service_15k39kp";
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || "tWDas_H0Jb4j3tzPT";

const validationSchema = z.object({
  username: z
    .string({ description: "Username is required" })
    .max(40, "usernam should less than 40 character"),
  email: z
    .string({ description: "Email is required" })
    .email({ message: "Should be valid email." }),
  message: z.string({ description: "Message is required" }),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isLoading, isSubmitting, isSubmitted },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = useCallback(
    async (data: FormState) => {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            to_name: "pet",
            message: data.message,
            from_name: data.username,
            from_email: data.email,
          },
          PUBLIC_KEY,
        );

        reset();
      } catch (e) {
        console.error(e);
      }
    },
    [reset],
  );

  return (
    <form className="flex w-full max-w-[600px] flex-col gap-3 pt-10 md:pt-3">
      <div className="flex items-center gap-3">
        <TextField
          errors={errors}
          register={register}
          hint="Username"
          type="text"
          name="username"
        />
        <TextField
          errors={errors}
          register={register}
          hint="Email"
          type="email"
          name="email"
        />
      </div>
      <TextField
        errors={errors}
        register={register}
        hint="Message"
        type="text"
        name="message"
        className="w-full"
      />

      <WorkTogetherButton
        onClick={handleSubmit(onSubmit)}
        custom={0.1}
        className="w-full rounded-md"
      >
        <Magnetic custom={0.1}>
          <Spacing
            className={`${
              isLoading || (isSubmitting && "justify-center")
            } justify-start gap-3 px-7`}
          >
            {isLoading || isSubmitting ? (
              <div className="animate-spin">
                <Loader size={40} />
              </div>
            ) : !isSubmitted ? (
              <>
                <ArrowIcon size={40} />
                <p className="text-sm uppercase">Go with it</p>
              </>
            ) : (
              <div>
                <CheckIcon size={40} />
              </div>
            )}
          </Spacing>
        </Magnetic>
      </WorkTogetherButton>
    </form>
  );
};

export default Form;
