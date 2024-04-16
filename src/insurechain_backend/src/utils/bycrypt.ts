import { createHash, randomBytes } from "crypto";

const hashPassword = async (password: string): Promise<string> => {
  const salt = randomBytes(16).toString("hex");

  const hashedPassword = createHash("sha256")
    .update(password + salt)
    .digest("hex");

  return `${hashedPassword}.${salt}`;
};

const comparePasswords = async (
  password: string,
  hashedPasswordWithSalt: string
): Promise<boolean> => {
  const [storedHash, storedSalt] = hashedPasswordWithSalt.split(".");

  const hashedPassword = createHash("sha256")
    .update(password + storedSalt)
    .digest("hex");

  return hashedPassword === storedHash;
};

export { comparePasswords, hashPassword };
