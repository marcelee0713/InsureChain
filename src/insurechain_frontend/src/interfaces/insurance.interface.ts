export interface InsuranceType {
  insuranceId: string;
  name: string;
  longDescription: string;
  description: string;
  image: string;
  benefits: benefitsType[];
  challenges: ChallengesType[];
  createdAt: string;
}

export interface ChallengesType {
  challengesId: string;
  insuranceId: string;
  name: string;
  description: string;
  tokenPrize: string;
  userStatus: userStatus[];
  createdAt: string;
}

export type userStatus = {
  uid: string;
  status: challengeStatus; // AVAILABLE ON DEFAULT WHEN USER IS NOT PRESENT
  finishedAt?: string;
};

export interface benefitsType {
  name: string;
  description: string;
}

export type challengeStatus = "ON-GOING" | "FINISHED" | "CANCEL";
