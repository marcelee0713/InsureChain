import { Record, text } from "azle";

const userBody = Record({
  userId: text,
});

const signUpBody = Record({
  username: text,
  password: text,
  email: text,
});

const signInBody = Record({
  username: text,
  password: text,
});

const gainTokenBody = Record({
  userId: text,
  token: text,
});

export { signUpBody, signInBody, gainTokenBody, userBody };
