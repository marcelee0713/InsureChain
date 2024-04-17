export type insuranceType = {
  insuranceId: string;
  name: string;
  description: string;
  image: string;
  challenges: challengesType[];
  createdAt: string;
};

export type challengesType = {
  challengesId: string;
  name: string;
  description: string;
  challenge: string;
  tokenPrize: string;
  claimedUsers: string[];
  createdAt: string;
};
