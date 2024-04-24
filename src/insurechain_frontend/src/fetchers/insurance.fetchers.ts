import { insurechain_backend } from "../../../declarations/insurechain_backend";
import { InsuranceType } from "../interfaces/insurance.interface";
import { catchErrors } from "../utils/error.catcher";

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

export { getInsurances, getInsurance };
