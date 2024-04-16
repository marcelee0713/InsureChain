export const generateUID = (): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const segmentLengths = [4, 4, 4, 4];

  let uid = "";

  for (const segmentLength of segmentLengths) {
    let segment = "";
    for (let i = 0; i < segmentLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      segment += characters.charAt(randomIndex);
    }
    uid += segment;
    if (segmentLength < segmentLengths[segmentLengths.length - 1]) {
      uid += "-";
    }
  }

  return uid;
};
