import { Record, text } from "azle";

const getInsuranceChallengesBody = Record({
  insuranceId: text,
});

const challengeBody = Record({
  insuranceId: text,
  challengeId: text,
});

const updateChallengeBody = Record({
  userId: text,
  insuranceId: text,
  challengeId: text,
  challengeStatus: text,
});

const createChallengeBody = Record({
  insuranceId: text,
  name: text,
  description: text,
  challenge: text,
  tokenPrize: text,
});

const getAvailableChallengesBody = Record({
  userId: text,
});

export {
  updateChallengeBody,
  createChallengeBody,
  challengeBody,
  getAvailableChallengesBody,
  getInsuranceChallengesBody,
};
