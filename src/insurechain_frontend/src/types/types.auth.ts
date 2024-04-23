import { UseFormRegister } from "react-hook-form";

export interface SignInFormData {
  username: string;
  password: string;
}

export interface SignUpFormData {
  username: string;
  email: string;
  cfrmPassword: string;
  password: string;
}

export type SignInEnums = "username" | "password";

export type SignUpEnums = "username" | "email" | "cfrmPassword" | "password";

export type AuthFormType = "SIGNIN" | "SIGNUP";

export type EnumRegisterType<AuthFormType> = AuthFormType extends "SIGNIN"
  ? SignInEnums
  : SignUpEnums;

export type RegisterType<AuthFormType> = AuthFormType extends "SIGNIN"
  ? UseFormRegister<SignInFormData>
  : UseFormRegister<SignUpFormData>;
