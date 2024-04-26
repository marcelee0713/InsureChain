export type insuranceType = {
  insuranceId: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  challenges: challengesType[];
  createdAt: string;
};

export type challengesType = {
  challengesId: string;
  insuranceId: string;
  name: string;
  description: string;
  tokenPrize: string;
  userStatus: userStatus[];
  createdAt: string;
};

export type userStatus = {
  uid: string;
  status: challengeStatus; // AVAILABLE ON DEFAULT WHEN USER IS NOT PRESENT
  finishedAt?: string;
};

export type benefitsType = {
  name: string;
  description: string;
};

export type challengeStatus = "ON-GOING" | "FINISHED";
