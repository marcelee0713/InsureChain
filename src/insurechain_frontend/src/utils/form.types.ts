import { UseFormRegister } from "react-hook-form";
import {
  AuthFormType,
  EnumRegisterType,
  RegisterType,
  SignInEnums,
  SignInFormData,
  SignUpEnums,
  SignUpFormData,
} from "../types/types.auth";

const registerWithType = (
  formType: AuthFormType,
  register: RegisterType<AuthFormType>
): UseFormRegister<SignInFormData> | UseFormRegister<SignUpFormData> => {
  if (formType === "SIGNIN") {
    return register as UseFormRegister<SignInFormData>;
  }

  return register as UseFormRegister<SignUpFormData>;
};

const registerEnum = (
  formType: AuthFormType,
  enumType: EnumRegisterType<AuthFormType>
): SignInEnums | SignUpEnums => {
  if (formType === "SIGNIN") {
    return enumType as SignInEnums;
  }

  return enumType as SignUpEnums;
};

export { registerWithType, registerEnum };
