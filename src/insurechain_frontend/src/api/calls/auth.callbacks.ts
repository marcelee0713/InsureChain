import { insurechain_backend } from "../../../../declarations/insurechain_backend";
import { SignInFormData, SignUpFormData } from "../../types/types.auth";
import { catchErrors } from "../../utils/error.catcher";

export interface CallbacksInterface {
  onLoading: () => void;
  onSuccess: (result: string) => void;
  onError: (result: string) => void;
}

const signInCall = async (
  data: SignInFormData,
  { onError, onSuccess, onLoading }: CallbacksInterface
): Promise<void> => {
  onLoading();
  const usernameValue = data.username;
  const passwordValue = data.password;

  try {
    const result = await insurechain_backend.signIn({
      username: usernameValue,
      password: passwordValue,
    });

    onSuccess(result);
  } catch (err) {
    if (err instanceof Error) {
      onError(catchErrors(err));
      return;
    }

    return console.log("Uncatched error");
  }
};

export const signUpCall = async (
  data: SignUpFormData,
  { onError, onSuccess, onLoading }: CallbacksInterface
): Promise<void> => {
  try {
    onLoading();

    await insurechain_backend.signUp({
      username: data.username,
      email: data.email,
      password: data.password,
      isInsuranceCompany: "NO", // TODO: CHANGE
    });

    onSuccess("Registered");
  } catch (err) {
    if (err instanceof Error) {
      onError(catchErrors(err));
      return;
    }

    return console.log("Uncatched error");
  }
};

export { signInCall };
