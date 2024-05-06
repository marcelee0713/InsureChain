import React, { Dispatch, SetStateAction } from "react";
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";
import {
  SignInFormData,
  SignUpFormData,
  AuthFormType,
  SignInEnums,
  SignUpEnums,
  RegisterType,
  EnumRegisterType,
  CreateInsuranceFormData,
  CreateInsuranceEnums,
} from "../../types/types.auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerEnum, registerWithType } from "../../utils/form.types";

interface props {
  label: string;
  inputType?: string;
  register: RegisterType<AuthFormType>;
  errorCatch: FieldError | undefined;
  formType: AuthFormType;
  nameRegister: EnumRegisterType<AuthFormType>;
}

interface passwordProps {
  label: string;
  register: RegisterType<AuthFormType>;
  inputType?: string;
  errorCatch: FieldError | undefined;
  formType: AuthFormType;
  nameRegister: EnumRegisterType<AuthFormType>;
  visiblePassword?: boolean;
  passwordSetVisible: Dispatch<SetStateAction<boolean>>;
}

interface insuranceProps {
  label: string;
  inputType?: string;
  register: UseFormRegister<CreateInsuranceFormData>;
  errorCatch: FieldError | undefined;
  nameRegister: CreateInsuranceEnums;
}

const InputText: React.FC<props> = ({
  label,
  errorCatch,
  nameRegister,
  inputType,
  formType,
  register,
}) => {
  const signInRegister = registerWithType(
    "SIGNIN",
    register
  ) as UseFormRegister<SignInFormData>;

  const signUpRegister = registerWithType(
    "SIGNUP",
    register
  ) as UseFormRegister<SignUpFormData>;

  const signInEnum = registerEnum("SIGNIN", nameRegister) as SignInEnums;

  const signUpEnum = registerEnum("SIGNUP", nameRegister) as SignUpEnums;

  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor={label} className="font-bold text-black font-openSans">
        {label}
      </label>
      <input
        type={inputType ?? "text"}
        id={label}
        autoComplete="off"
        className={`${!errorCatch && "border border-boxColor"} ${
          errorCatch && "border-2 border-boxColor"
        } outline-none bg-transparent  px-3 text-black font-normal rounded-lg h-[50px] font-openSans`}
        {...(formType === "SIGNIN"
          ? signInRegister(signInEnum)
          : signUpRegister(signUpEnum))}
      />
      <span
        className={`font-openSans text-rose-400 duration-300 opacity-0 ease-in text-xs ${
          errorCatch && `opacity-100`
        }`}
      >
        {errorCatch && errorCatch.message}
      </span>
    </div>
  );
};

const InputTextInsurance: React.FC<insuranceProps> = ({
  errorCatch,
  nameRegister,
  label,
  register,
  inputType,
}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor={label} className="font-bold text-black font-openSans">
        {label}
      </label>

      {inputType === "textarea" ? (
        <textarea
          id={label}
          autoComplete="off"
          className={`${!errorCatch && "border border-boxColor"} ${
            errorCatch && "border-2 border-boxColor"
          } outline-none bg-transparent  p-3 text-black font-normal rounded-lg h-[80px] font-openSans`}
          {...register(nameRegister)}
        />
      ) : (
        <input
          type={inputType ?? "text"}
          id={label}
          autoComplete="off"
          className={`${!errorCatch && "border border-boxColor"} ${
            errorCatch && "border-2 border-boxColor"
          } outline-none bg-transparent  px-3 text-black font-normal rounded-lg h-[50px] font-openSans`}
          {...register(nameRegister)}
        />
      )}

      <span
        className={`font-openSans text-rose-400 duration-300 opacity-0 ease-in text-xs ${
          errorCatch && `opacity-100`
        }`}
      >
        {errorCatch && errorCatch.message}
      </span>
    </div>
  );
};

const InputTextPassword: React.FC<passwordProps> = ({
  visiblePassword,
  passwordSetVisible,
  errorCatch,
  nameRegister,
  label,
  register,
  formType,
}) => {
  const signInRegister = registerWithType(
    "SIGNIN",
    register
  ) as UseFormRegister<SignInFormData>;

  const signUpRegister = registerWithType(
    "SIGNUP",
    register
  ) as UseFormRegister<SignUpFormData>;

  const signInEnum = registerEnum("SIGNIN", nameRegister) as SignInEnums;

  const signUpEnum = registerEnum("SIGNUP", nameRegister) as SignUpEnums;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="font-bold text-black font-openSans">
        {label}
      </label>
      <div className="flex items-center relative">
        <input
          id={label}
          type={visiblePassword ? "text" : "password"}
          autoComplete="off"
          className={`${!errorCatch && "border border-boxColor"} ${
            errorCatch && "border-2 border-boxColor"
          } outline-none bg-transparent px-3 text-black font-normal w-full rounded-lg h-[50px] font-openSans`}
          {...(formType === "SIGNIN"
            ? signInRegister(signInEnum)
            : signUpRegister(signUpEnum))}
        />
        {!visiblePassword && (
          <FaEyeSlash
            className="absolute right-0 mr-2 text-boxColor"
            size={25}
            onClick={() => passwordSetVisible(true)}
          />
        )}
        {visiblePassword && (
          <FaEye
            className="absolute right-0 mr-2 text-boxColor"
            size={25}
            onClick={() => passwordSetVisible(false)}
          />
        )}
      </div>
      <span
        className={`text-rose-400 duration-300 opacity-0 ease-in text-xs font-openSans ${
          errorCatch && `opacity-100`
        }`}
      >
        {errorCatch && errorCatch.message}
      </span>
    </div>
  );
};

export { InputText, InputTextPassword, InputTextInsurance };
