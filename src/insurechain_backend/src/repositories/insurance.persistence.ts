import {
  challengesType,
  insuranceType,
} from "../interfaces/insurance.interface";
import { userType } from "../interfaces/user.interface";
import { generateUID } from "../utils/uid.generator";
import { getUser } from "./user.persistance";

const createInsurance = async (
  insuranceName: string,
  description: string,
  longDesc: string,
  challenges: challengesType[],
  insuranceDb: insuranceType[],
  requiredTokens: string,
  userId: string,
  userDb: userType[],
  image?: string
): Promise<void> => {
  try {
    if (!insuranceName || !description) {
      throw new Error("Invalid parameters. insuranceName, description");
    }

    const insuranceId = generateUID();

    const user = await getUser(userId, userDb);

    for (let i = 0; i < userDb.length; i++) {
      if (user.uid === userDb[i].uid) {
        user.insuranceId = insuranceId;
      }
    }

    const insurance: insuranceType = {
      insuranceId,
      name: insuranceName,
      longDescription: longDesc,
      description,
      address: "",
      image:
        !image || image === ""
          ? "https://res.cloudinary.com/dop8qsdej/image/upload/v1714925984/my-uploads/default_insurance-bg_qdbq5z.jpg"
          : image,
      requiredTokens,
      benefits: [],
      createdAt: Date.now().toString(),
      challenges: challenges.map((challenge) => ({
        ...challenge,
        challengesId: generateUID(),
        claimedUsers: [],
      })),
    };

    insuranceDb.push(insurance);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

const getInsurance = async (
  insuranceId: string,
  insuranceDb: insuranceType[]
): Promise<insuranceType> => {
  try {
    let insurance: insuranceType | undefined = undefined;

    for (let i = 0; i < insuranceDb.length; i++) {
      if (insuranceId === insuranceDb[i].insuranceId) {
        insurance = insuranceDb[i];
        break;
      }
    }

    if (!insurance)
      throw new Error("The following insurance can not be found!");

    return insurance;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

const applyInsurance = async (
  userId: string,
  currentBalance: string,
  insuranceId: string,
  insuranceDb: insuranceType[],
  userDb: userType[]
): Promise<void> => {
  try {
    await getUser(userId, userDb);

    const insurance = await getInsurance(insuranceId, insuranceDb);

    const currentToken = parseInt(currentBalance);
    const costToApply = parseInt(insurance.requiredTokens) / 1000;

    if (currentToken <= costToApply) {
      throw new Error("Not enough balance!");
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

export { createInsurance, getInsurance, applyInsurance };
