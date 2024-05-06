import { insurechain_backend } from "../../../../declarations/insurechain_backend";
import { CreateInsuranceBody } from "../../interfaces/insurance.interface";
import { catchErrors } from "../../utils/error.catcher";
import { CallbacksInterface } from "./auth.callbacks";

export const CreateInsurance = async (
  data: CreateInsuranceBody,
  userId: string,
  { onError, onSuccess, onLoading }: CallbacksInterface
): Promise<void> => {
  try {
    onLoading();

    await insurechain_backend.createInsurance({
      imageUrl: data.imageUrl ?? "",
      ...data,
      userId: userId,
    });

    onSuccess("Success!");
  } catch (err) {
    if (err instanceof Error) {
      onError(catchErrors(err));
      return;
    }

    return console.log("Uncatched error");
  }
};
