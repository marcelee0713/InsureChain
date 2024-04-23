import { Canister, update, text, Void, query } from "azle";
import { hashPassword } from "./utils/bycrypt";
import { validate, validateLogin } from "./utils/user.validation";
import { generateUID } from "./utils/uid.generator";
import { userType } from "./types/user.types";
import { addTokenToUser } from "./repositories/token.persistence";
import { insuranceType } from "./types/insurance.types";
import {
  createChallenge,
  createInsurance,
  getChallenge,
  getInsurance,
  updateChallengeStatus,
  getAvailableChallenges,
} from "./repositories/insurance.persistence";
import {
  gainTokenBody,
  signInBody,
  signUpBody,
  userBody,
} from "./records/user.records";
import {
  challengeBody,
  createChallengeBody,
  updateChallengeBody,
  getAvailableChallengesBody,
} from "./records/challenge.records";
import {
  createInsuranceBody,
  insuranceBody,
} from "./records/insurance.records";
import { usersData } from "./constants/user.constants";
import insuranceData from "./constants/insurance.constants";
import { getUser } from "./repositories/user.persistance";

let usersDb: userType[] = usersData;
let insuranceDb: insuranceType[] = insuranceData;

export default Canister({
  signUp: update([signUpBody], Void, async (req) => {
    try {
      await validate(req.username, req.email, req.password, usersDb);

      const res: userType = {
        uid: generateUID(),
        username: req.username,
        password: await hashPassword(req.password),
        email: req.email,
        token: "0",
        createdAt: Date.now().toString(),
      };

      usersDb.push(res);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw new Error("Invalid inputs please check them!");
    }
  }),

  signIn: update([signInBody], text, async (req) => {
    try {
      const uid = await validateLogin(req.username, req.password, usersDb);

      return uid;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw new Error("Internal server error");
    }
  }),

  updateChallenge: update([updateChallengeBody], text, async (req) => {
    try {
      const tokenPrize = await updateChallengeStatus(
        req.userId,
        req.insuranceId,
        req.challengeId,
        req.challengeStatus,
        insuranceDb
      );

      return tokenPrize;
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw new Error("Internal server error!");
    }
  }),

  createInsurance: update([createInsuranceBody], Void, async (req) => {
    try {
      await createInsurance(
        req.insuranceName,
        req.description,
        req.imageUrl,
        [],
        insuranceDb
      );
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw new Error("Internal server error!");
    }
  }),

  createChallenge: update([createChallengeBody], Void, async (req) => {
    try {
      await createChallenge(
        req.insuranceId,
        req.name,
        req.description,
        req.challenge,
        req.tokenPrize,
        insuranceDb
      );
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw new Error("Internal server error!");
    }
  }),

  gainToken: update([gainTokenBody], Void, async (req) => {
    try {
      addTokenToUser(req.userId, req.token, usersDb);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }

      throw new Error("Internal server error!");
    }
  }),

  getAllUsers: query([], text, () => {
    const users = JSON.stringify(usersDb);
    return users;
  }),

  getInsurances: query([], text, () => {
    return JSON.stringify(insuranceDb);
  }),

  getUser: query([userBody], text, async (req) => {
    try {
      const user = await getUser(req.userId, usersDb);

      return JSON.stringify(user);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error("Internal server error!");
    }
  }),

  getInsurance: query([insuranceBody], text, async (req) => {
    try {
      const insuranceObj = await getInsurance(req.insuranceId, insuranceDb);

      return JSON.stringify(insuranceObj);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error("Internal server error!");
    }
  }),

  getChallenge: query([challengeBody], text, async (req) => {
    try {
      const challenge = await getChallenge(
        req.insuranceId,
        insuranceDb,
        req.challengeId
      );
      return JSON.stringify(challenge);
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error("Internal server error!");
    }
  }),

  getAvailableChallenges: query(
    [getAvailableChallengesBody],
    text,
    async (req) => {
      try {
        const availableChallenges = await getAvailableChallenges(
          req.userId,
          insuranceDb
        );
        return JSON.stringify(availableChallenges);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
        throw new Error("Internal server error!");
      }
    }
  ),
});
