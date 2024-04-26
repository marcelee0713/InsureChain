import { insurechain_backend } from "../../../../declarations/insurechain_backend";
import { ChallengesType } from "../../interfaces/insurance.interface";
import { catchErrors } from "../../utils/error.catcher";

const getChallenges = async (key: string): Promise<ChallengesType[]> => {
  try {
    const uid = localStorage.getItem("uid");

    if (!uid) throw Error("User not logged in");

    const challengesStr = await insurechain_backend.getAvailableChallenges({
      userId: uid,
    });

    const jsonData: ChallengesType[] = JSON.parse(challengesStr);

    return jsonData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(catchErrors(err));
    }
    throw new Error("Internal server error");
  }
};

const getChallengesFromInsurance = async (
  key: string
): Promise<ChallengesType[]> => {
  try {
    const choppedkey = key.split(":");

    const insuranceId = choppedkey[0];

    const challengesStr = await insurechain_backend.getInsuranceChallenges({
      insuranceId: insuranceId,
    });

    const jsonData: ChallengesType[] = JSON.parse(challengesStr);

    return jsonData;
  } catch (err) {
    throw new Error("Internal server error");
  }
};

const getChallenge = async (key: string): Promise<ChallengesType> => {
  try {
    const choppedKey = key.split("/");

    const insuranceId = choppedKey[0];
    const challengeId = choppedKey[1];

    const challengeStr = await insurechain_backend.getChallenge({
      insuranceId: insuranceId,
      challengeId: challengeId,
    });

    const jsonData: ChallengesType = JSON.parse(challengeStr);

    return jsonData;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(catchErrors(err));
    }
    throw new Error("Internal server error");
  }
};

export { getChallenge, getChallenges, getChallengesFromInsurance };
