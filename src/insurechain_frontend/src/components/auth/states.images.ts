import { stateType } from "./states";

export const authStatusImages = (type: stateType): string => {
  if (type === "ERROR") return "/images/error.png";

  if (type === "WARNING") return "/images/warning.png";

  if (type === "SUCCESS") return "/images/success.png";

  return "";
};
