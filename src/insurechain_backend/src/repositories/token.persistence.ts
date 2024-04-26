import { userType } from "../interfaces/user.interface";

const addTokenToUser = (
  userId: string,
  token: string,
  userDb: userType[]
): void => {
  const user = userDb.find((user) => user.uid === userId);
  if (!user) {
    throw new Error("User does not exist.");
  }

  const currentToken = parseInt(user.token, 10) || 0;
  const newToken = parseInt(token, 10);
  if (isNaN(newToken)) {
    throw new Error("Invalid token format. Token must be an integer.");
  }

  user.token = (currentToken + newToken).toString();
};

export { addTokenToUser };
