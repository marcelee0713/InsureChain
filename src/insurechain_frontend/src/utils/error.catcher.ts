export const catchErrors = (err: Error): string => {
  return err.message.substring(err.message.indexOf("Error:"));
};
