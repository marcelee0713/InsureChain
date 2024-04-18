import { Record, text } from "azle";

const createInsuranceBody = Record({
  insuranceName: text,
  description: text,
  imageUrl: text,
});

export { createInsuranceBody };
