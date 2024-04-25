import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CallbacksInterface, signUpCall } from "../../api/calls/auth.callbacks";
import { SignUpFormData } from "../../types/types.auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../../schemas/auth.schemas";
import {
  InputText,
  InputTextPassword,
} from "../../components/inputs/input_texts";
import { AuthLoading } from "../../components/auth/loading";
import { AuthStates } from "../../components/auth/states";

const Signup = () => {
  const tailwindStyle = `bg-boxColor border-secondary border rounded-lg p-[36px] font-openSans flex flex-col 
  lg:min-w-[488px] w-[450px] sm:min-w-[200px] min-h-[700px] border-opacity-20`;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [cfrmVisible, setCfrmVisible] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setLoading(true);
      setError("");
      setSuccess(false);
    },

    onError(result) {
      setError(result);
      setLoading(false);
      setSuccess(false);
    },

    onSuccess(result) {
      setError("");
      setLoading(false);
      setSuccess(true);
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  if (success) {
    return (
      <AuthStates
        style={`${tailwindStyle} items-center justify-center gap-2`}
        buttonType="DUO"
        header="Success!"
        desc="You have successfully created an account! Would you like to go to the log in page"
        type="SUCCESS"
        alt="Success image"
        onTapYesText="Yes"
        onTapNoText="No"
        onTapYes={() => {
          navigate("/auth/sign-in", { replace: true });
        }}
        onTapNo={() => {
          setLoading(false);
          setError("");
          setSuccess(false);
        }}
      />
    );
  }

  if (error) {
    return (
      <AuthStates
        style={`${tailwindStyle} items-center justify-center gap-2`}
        buttonType="SINGLE"
        header="Whoops, something wrong happened!"
        desc={error}
        type="ERROR"
        alt="Error image"
        onTapText="Try again"
        onTap={() => {
          setLoading(false);
          setError("");
          setSuccess(false);
        }}
      />
    );
  }

  if (loading)
    return (
      <AuthLoading
        tailwindStyle={`${tailwindStyle} items-center justify-center`}
      />
    );

  return (
    <section>
      <form
        onSubmit={handleSubmit((data) => signUpCall(data, cb))}
        className={tailwindStyle + "h-full animate-animfadeRightSide "}
      >
        <div className="flex flex-col gap-2 w-full">
          <InputText
            label="Username"
            nameRegister="username"
            register={register}
            errorCatch={errors.username}
            formType="SIGNUP"
          />

          <InputText
            label="Email"
            nameRegister="email"
            register={register}
            errorCatch={errors.email}
            formType="SIGNUP"
          />

          <InputTextPassword
            label="Password"
            nameRegister="password"
            register={register}
            passwordSetVisible={setVisible}
            visiblePassword={visible}
            errorCatch={errors.password}
            formType="SIGNUP"
          />

          <InputTextPassword
            label="Confirm Password"
            nameRegister="cfrmPassword"
            register={register}
            passwordSetVisible={setCfrmVisible}
            visiblePassword={cfrmVisible}
            errorCatch={errors.cfrmPassword}
            formType="SIGNUP"
          />

          <div className="text-accent font-openSans mb-2 text-xs mt-2 cursor-pointer hover:underline w-full">
            Note: Password must be at least 8 characters, at least one
            uppercase, number, and special characters
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <button
            type="submit"
            className="bg-black font-openSans text-primary w-full font-bold py-3 rounded-lg my-5 hover:bg-secondary hover:text-primary"
          >
            Sign Up
          </button>
          <hr className="border-secondary" />
          <p className="text-xs py-4 font-openSans text-center">
            By creating an account you agree to our{" "}
            <strong className="cursor-pointer hover:underline">
              Terms of Agreement{" "}
            </strong>{" "}
            and{" "}
            <strong className="cursor-pointer hover:underline">
              {" "}
              Privacy Policy.
            </strong>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Signup;
