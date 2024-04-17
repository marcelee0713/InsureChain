import { Canister, update, text, Void, query } from "azle";
import { hashPassword } from "./utils/bycrypt";
import { validate, validateLogin } from "./utils/user.validation";
import { generateUID } from "./utils/uid.generator";
import { userType } from "./types/user.types";
import { addTokenToUser } from "./utils/token.persistence";
import { insuranceType } from "./types/insurance.types";
import {
  createChallenge,
  createInsurance,
  updateChallengeStatus,
} from "./utils/insurance.persistence";
import { newChallenges } from "./constants/insurance.constants";

let usersDb: userType[] = [];
let insuranceDb: insuranceType[] = [];

export default Canister({
  signUp: update(
    [text, text, text],
    Void,
    async (username: string, password: string, email: string) => {
      try {
        await validate(username, email, password, usersDb);

        const res: userType = {
          uid: generateUID(),
          username: username,
          password: await hashPassword(password),
          email: email,
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
    }
  ),

  signIn: update(
    [text, text],
    text,
    async (username: string, password: string) => {
      try {
        const uid = await validateLogin(username, password, usersDb);

        return uid;
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }

        throw new Error("User name or password is invalid!");
      }
    }
  ),

  updateChallenge: update(
    [text, text, text],
    text,
    async (userId, insuranceId, challengeId) => {
      try {
        const tokenPrize = await updateChallengeStatus(
          userId,
          insuranceId,
          challengeId,
          insuranceDb
        );

        return tokenPrize;
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }

        throw new Error("Internal server error!");
      }
    }
  ),

  createInsurance: update(
    [text, text, text],
    Void,
    async (insuranceName, description, imageUrl) => {
      try {
        await createInsurance(
          insuranceName,
          description,
          imageUrl,
          newChallenges,
          insuranceDb
        );
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }

        throw new Error("Internal server error!");
      }
    }
  ),

  createChallenge: update(
    [text, text, text, text, text],
    Void,
    async (insuranceId, name, description, challenge, tokenPrize) => {
      try {
        await createChallenge(
          insuranceId,
          name,
          description,
          challenge,
          tokenPrize,
          insuranceDb
        );
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }

        throw new Error("Internal server error!");
      }
    }
  ),

  gainToken: update(
    [text, text],
    Void,
    async (userId: string, token: string) => {
      try {
        addTokenToUser(userId, token, usersDb);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }

        throw new Error("Internal server error!");
      }
    }
  ),

  getAllUsers: query([], text, () => {
    const users = JSON.stringify(usersDb);
    return users;
  }),

  getInsurances: query([], text, () => {
    return JSON.stringify(insuranceDb);
  }),
});
