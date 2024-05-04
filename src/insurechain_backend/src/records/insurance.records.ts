import { Record, text } from "azle";

const createInsuranceBody = Record({
  insuranceName: text,
  description: text,
  longDescription: text,
  imageUrl: text,
});

const insuranceBody = Record({
  insuranceId: text,
});

const applyInsuranceBody = Record({
  insuranceId: text,
  userId: text,
  tokenBalance: text,
});

export { createInsuranceBody, insuranceBody, applyInsuranceBody };
