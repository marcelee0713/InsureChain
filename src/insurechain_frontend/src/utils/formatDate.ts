export const formatDate = (inputDate: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};

export const formatDateFromTimestamp = (timestamp: string | number): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const date = new Date(Number(timestamp));
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
