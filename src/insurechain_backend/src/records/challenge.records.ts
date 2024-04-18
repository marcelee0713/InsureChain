import { Record, text } from "azle";

const updateChallengeBody = Record({
  userId: text,
  insuranceId: text,
  challengeId: text,
});

const createChallengeBody = Record({
  insuranceId: text,
  name: text,
  description: text,
  challenge: text,
  tokenPrize: text,
});

export { updateChallengeBody, createChallengeBody };
