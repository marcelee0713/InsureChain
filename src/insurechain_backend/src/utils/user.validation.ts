import { userOnDbType, userType } from "../interfaces/user.interface";
import { comparePasswords } from "./bycrypt";

const validateUsername = (username: string): boolean => {
  if (username.length < 3) {
    throw new Error("Username must be at least 3 characters long.");
  }

  if (!/^[a-zA-Z][a-zA-Z0-9]{2,}$/.test(username)) {
    throw new Error(
      "Username must start with a letter and can only contain letters and numbers."
    );
  }

  return true;
};

const validatePassword = (password: string): boolean => {
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }

  if (
    !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
      password
    )
  ) {
    throw new Error(
      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    );
  }

  return true;
};

const validateEmail = (email: string): boolean => {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email)) {
    throw new Error("Invalid email format.");
  }

  return true;
};

const validateUserData = (
  inputUsername: string,
  inputEmail: string,
  usersDb: userType[]
): boolean => {
  const existingUser = usersDb.find(
    (user) => user.username === inputUsername || user.email === inputEmail
  );
  if (existingUser) {
    if (existingUser.username === inputUsername) {
      throw new Error("Username already exists.");
    }
    if (existingUser.email === inputEmail) {
      throw new Error("Email already exists.");
    }
  }
  return true;
};

const validateExistence = (
  inputUsername: string,
  usersDb: userType[]
): userOnDbType => {
  const user = usersDb.find((user) => user.username === inputUsername);
  if (!user) {
    throw new Error("User not found.");
  }

  const obj: userOnDbType = {
    ...user,
    type: user.isInsuranceCompany,
  };

  return obj;
};

const validate = async (
  username: string,
  email: string,
  password: string,
  database: userType[]
): Promise<boolean> => {
  try {
    const usernameIsValid = validateUsername(username);
    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);
    const hasConflicts = validateUserData(username, email, database);

    const allValid =
      usernameIsValid && emailIsValid && passwordIsValid && hasConflicts;

    return allValid;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Invalid inputs please check them!");
  }
};

const validateLogin = async (
  username: string,
  password: string,
  usersDb: userType[]
): Promise<{ uid: string; isInsuranceCompany: string }> => {
  try {
    validateUsername(username);
    validatePassword(password);

    const user = validateExistence(username, usersDb);

    const valid = await comparePasswords(password, user.password);

    if (!valid) throw new Error("User name or password is invalid!");

    return {
      isInsuranceCompany: user.type,
      uid: user.uid,
    };
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error");
  }
};

export {
  validate,
  validateEmail,
  validateUserData,
  validateUsername,
  validateExistence,
  validateLogin,
  validatePassword,
};
