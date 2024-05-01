import { insurechain_backend } from "../../../../declarations/insurechain_backend";
import { InsuranceType } from "../../interfaces/insurance.interface";
import { catchErrors } from "../../utils/error.catcher";
import { CallbacksInterface } from "../calls/auth.callbacks";

const getInsurances = async (key: string): Promise<InsuranceType[]> => {
  try {
    const insurancesStr = await insurechain_backend.getInsurances();

    const jsonData: InsuranceType[] = JSON.parse(insurancesStr);

    return jsonData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(catchErrors(err));
    }
    throw new Error("Internal server error");
  }
};

const getInsurance = async (key: string): Promise<InsuranceType> => {
  try {
    const choppedkey = key.split(":");

    const id = choppedkey[0];

    const insurancesStr = await insurechain_backend.getInsurance({
      insuranceId: id,
    });

    const jsonData: InsuranceType = JSON.parse(insurancesStr);

    return jsonData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(catchErrors(err));
    }
    throw new Error("Internal server error");
  }
};

const applyInsurance = async (
  userId: string,
  insuranceId: string,
  { onError, onLoading, onSuccess }: CallbacksInterface
): Promise<void> => {
  onLoading();

  try {
    await insurechain_backend.applyInsurance({
      userId: userId,
      insuranceId: insuranceId,
    });

    onSuccess("Successfully applied an insurance!");
  } catch (err) {
    if (err instanceof Error) {
      onError(catchErrors(err));
      throw new Error(catchErrors(err));
    }
    throw new Error("Internal server error");
  }
};

export { getInsurances, getInsurance, applyInsurance };
