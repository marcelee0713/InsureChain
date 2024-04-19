import { ZodType, z } from "zod";
import { SignInFormData, SignUpFormData } from "../types/types.auth";

const passRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.+=_]).{8,}$/;

export const signInSchema: ZodType<SignInFormData> = z.object({
  username: z.string().min(1, { message: "Please provide a username" }),
  password: z
    .string()
    .min(1, { message: "Please provide a password" })
    .min(8, { message: "Password must contain at least 8 character(s)" }),
});

export const signUpSchema: ZodType<SignUpFormData> = z
  .object({
    username: z.string().min(1, { message: "Please provide a username" }),
    email: z.string().min(1, { message: "Please provide an email" }).email(),
    password: z
      .string()
      .min(1, { message: "Please provide a password" })
      .min(8, { message: "Password must contain at least 8 character(s)" })
      .regex(passRegExp, {
        message: "Invalid password, please follow the format",
      }),
    cfrmPassword: z
      .string()
      .min(1, { message: "Please provide an input" })
      .min(5, { message: "This field must contain at least 8 character(s)" })
      .max(20),
  })
  .refine((data) => data.password === data.cfrmPassword, {
    message: "Passwords do not match",
    path: ["cfrmPassword"],
  });
