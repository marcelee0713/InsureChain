import {
  challengesType,
  insuranceType,
  userStatus,
} from "../interfaces/insurance.interface";
import { userType } from "../interfaces/user.interface";
import { generateUID } from "../utils/uid.generator";
import { updateActivity } from "./user.persistance";

const createChallenge = async (
  insuranceId: string,
  name: string,
  description: string,
  challenge: string,
  tokenPrize: string,
  insuranceDb: insuranceType[]
): Promise<void> => {
  try {
    if (!insuranceId || !name || !description || !challenge || !tokenPrize) {
      throw new Error(
        "Invalid parameters. insuranceId, name, description, challenge, and tokenPrize must be provided."
      );
    }

    const insurance = insuranceDb.find(
      (insurance) => insurance.insuranceId === insuranceId
    );
    if (!insurance) {
      throw new Error(`Insurance with ID '${insuranceId}' not found.`);
    }

    const challengeId = generateUID();
    const newChallenge: challengesType = {
      challengesId: challengeId,
      insuranceId: insuranceId,
      name,
      description,
      tokenPrize,
      address: insurance.address,
      userStatus: [],
      createdAt: Date.now().toString(),
    };

    insurance.challenges.push(newChallenge);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

const updateChallengeStatus = async (
  userId: string,
  insuranceId: string,
  challengesId: string,
  challengeStatus: string,
  insuranceDb: insuranceType[],
  usersDb: userType[]
): Promise<string> => {
  try {
    if (!userId || !insuranceId || !challengesId) {
      throw new Error(
        "Invalid parameters. userId, insuranceId, and challengesId must be provided."
      );
    }

    if (insuranceDb.length === 0) {
      throw new Error("Insurance database is empty.");
    }

    const insurance = insuranceDb.find(
      (insurance) => insurance.insuranceId === insuranceId
    );

    if (!insurance) {
      throw new Error(`Insurance with ID '${insuranceId}' not found.`);
    }

    const challenge = insurance.challenges.find(
      (challenge) => challenge.challengesId === challengesId
    );

    if (!challenge) {
      throw new Error(
        `Challenge with ID '${challengesId}' not found in insurance '${insuranceId}'.`
      );
    }

    if (challengeStatus === "FINISHED") {
      challenge.userStatus.forEach((val) => {
        if (val.uid === userId && val.status === "ON-GOING") {
          const index = challenge.userStatus.indexOf(val);
          challenge.userStatus[index].status = "FINISHED";
          challenge.userStatus[index].finishedAt = Date.now().toString();

          updateActivity(userId, "CHALLENGES", "DONE", usersDb, {
            challengeId: challenge.challengesId,
            insuranceId: insurance.insuranceId,
            statusId: val.uid,
          });

          return;
        }
      });

      return challenge.tokenPrize;
    }

    if (challengeStatus === "CANCEL") {
      challenge.userStatus.forEach((val) => {
        if (val.uid === userId && val.status === "ON-GOING") {
          const index = challenge.userStatus.indexOf(val);
          challenge.userStatus.splice(index, 1);

          updateActivity(userId, "CHALLENGES", "REMOVE", usersDb, {
            challengeId: challenge.challengesId,
            insuranceId: insurance.insuranceId,
            statusId: val.uid,
          });

          return;
        }
      });

      return "0";
    }

    const createStatus: userStatus = {
      uid: userId,
      status: "ON-GOING",
    };

    challenge.userStatus.push(createStatus);

    updateActivity(userId, "CHALLENGES", "START", usersDb, {
      challengeId: challenge.challengesId,
      insuranceId: insurance.insuranceId,
      statusId: userId,
    });

    return "0";
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

const getAvailableChallenges = async (
  userId: string,
  insuranceDb: insuranceType[]
): Promise<challengesType[]> => {
  try {
    const availableChallenges: challengesType[] = [];

    insuranceDb.forEach((insurance) => {
      if (insurance.challenges && insurance.challenges.length > 0) {
        insurance.challenges.forEach((challenge) => {
          availableChallenges.push(challenge);
        });
      }
    });

    return availableChallenges;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

const getAllChallengesFromInsurance = (
  insuranceDb: insuranceType[]
): challengesType[] => {
  const allChallenges: challengesType[] = [];

  // Loop through each insurance company and extract challenges
  insuranceDb.forEach((insurance) => {
    insurance.challenges.forEach((challenge) => {
      allChallenges.push(challenge);
    });
  });

  return allChallenges;
};

const getChallenge = async (
  insuranceId: string,
  insuranceDb: insuranceType[],
  challengeId: string
): Promise<challengesType> => {
  try {
    let challenge: challengesType | undefined = undefined;

    for (let i = 0; i < insuranceDb.length; i++) {
      if (insuranceId === insuranceDb[i].insuranceId) {
        for (let j = 0; j < insuranceDb[i].challenges.length; j++) {
          if (challengeId === insuranceDb[i].challenges[j].challengesId) {
            challenge = insuranceDb[i].challenges[j];
            break;
          }
        }
        break;
      }
    }

    if (!challenge)
      throw new Error("The following challenge can not be found!");

    return challenge;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

const getChallengesFromInsurance = (
  insuranceId: string,
  db: insuranceType[]
): challengesType[] => {
  let challenges: challengesType[] = [];

  for (let i = 0; i < db.length; i++) {
    if (insuranceId === db[i].insuranceId) {
      challenges = db[i].challenges;
      break;
    }
  }

  return challenges;
};

export {
  createChallenge,
  getAvailableChallenges,
  getAllChallengesFromInsurance,
  getChallenge,
  updateChallengeStatus,
  getChallengesFromInsurance,
};
