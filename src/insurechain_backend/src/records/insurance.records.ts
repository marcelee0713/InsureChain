import { Record, text } from "azle";

const createInsuranceBody = Record({
  insuranceName: text,
  description: text,
  imageUrl: text,
});

const insuranceBody = Record({
  insuranceId: text,
});

export { createInsuranceBody, insuranceBody };
