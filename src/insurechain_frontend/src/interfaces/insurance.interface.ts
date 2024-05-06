export interface InsuranceType {
  insuranceId: string;
  name: string;
  longDescription: string;
  description: string;
  image: string;
  requiredTokens: string;
  benefits: benefitsType[];
  challenges: ChallengesType[];
  createdAt: string;
  address: string;
}

export interface ChallengesType {
  challengesId: string;
  insuranceId: string;
  name: string;
  description: string;
  tokenPrize: string;
  userStatus: userStatus[];
  createdAt: string;
  address: string;
}

export type userStatus = {
  uid: string;
  status: challengeStatus; // AVAILABLE ON DEFAULT WHEN USER IS NOT PRESENT
  finishedAt?: string;
  walletAddress?: string;
};

export interface benefitsType {
  name: string;
  description: string;
}

export type challengeStatus = "ON-GOING" | "FINISHED" | "CANCEL" | "PENDING";

export interface CreateInsuranceBody {
  insuranceName: string;
  description: string;
  longDescription: string;
  imageUrl?: string;
  walletAddress: string;
  requiredTokens: string;
}
