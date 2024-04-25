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

export { getChallenges };
