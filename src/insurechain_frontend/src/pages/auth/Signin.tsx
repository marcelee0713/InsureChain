import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { SignInFormData } from "../../types/types.auth";
import {
  InputText,
  InputTextPassword,
} from "../../components/inputs/input_texts";
import { signInSchema } from "../../schemas/auth.schemas";
import { CallbacksInterface, signInCall } from "../../api/calls/auth.callbacks";
import { AuthLoading } from "../../components/auth/loading";
import { AuthStates } from "../../components/auth/states";

const Signin = () => {
  const tailwindStyle = `bg-primary border-boxColor border rounded-lg p-[36px] font-openSans flex flex-col 
  lg:min-w-[488px] w-[450px] sm:min-w-[200px] min-h-[500px] `;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const cb: CallbacksInterface = {
    onLoading() {
      setLoading(true);
      setError("");
      setSuccess(false);
    },

    onError(result) {
      console.log(result);
      setError(result);
      setLoading(false);
      setSuccess(false);
    },

    onSuccess(result) {
      const data = result.split(":");
      const uid = data[0];
      const isInsuranceCompany = data[1] === "YES";

      localStorage.setItem("uid", uid);

      if (isInsuranceCompany) {
        navigate("/insurance/dashboard", { replace: true });
      } else {
        navigate("/home/dashboard", { replace: true });
      }
      setError("");
      setLoading(false);
      setSuccess(true);
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  if (loading)
    return (
      <AuthLoading
        tailwindStyle={`${tailwindStyle} items-center justify-center`}
      />
    );

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

  return (
    <form
      onSubmit={handleSubmit((data) => signInCall(data, cb))}
      className={
        tailwindStyle + " animate-animfadeRightSide items-center justify-center"
      }
    >
      <div className="flex flex-col gap-2 w-full">
        <InputText
          label="Username"
          nameRegister="username"
          register={register}
          errorCatch={errors.username}
          formType="SIGNIN"
        />

        <InputTextPassword
          label="Password"
          nameRegister="password"
          register={register}
          passwordSetVisible={setVisible}
          visiblePassword={visible}
          errorCatch={errors.password}
          formType="SIGNIN"
        />

        <Link
          to={""}
          className="text-boxColor font-openSans text-right mb-2 text-xs mt-2 cursor-pointer hover:underline w-fit self-end"
        >
          Forgot Password?
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-full ">
        <button
          type="submit"
          className="bg-boxColor text-primary hover:bg-primary hover:text-boxColor border hover:border-boxColor font-bold py-3 rounded-lg my-5 w-full font-openSans transition-colors duration-500 ease-in-out"
        >
          Sign in
        </button>
        <hr className="border-boxColor" />
        <Link to="/auth/sign-up" className="w-full h-full">
          <button
            type="button"
            className="border-boxColor text-boxColor font-bold rounded-lg border py-3 my-5 w-full hover:bg-boxColor hover:text-primary font-openSans transition-colors duration-500 ease-in-out"
          >
            Create an Account
          </button>
        </Link>
      </div>
    </form>
  );
};

export default Signin;
