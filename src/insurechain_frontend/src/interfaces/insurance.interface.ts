interface InsuranceType {
  insuranceId: string;
  name: string;
  description: string;
  image: string;
  challenges: ChallengesType[];
  createdAt: string;
}

interface ChallengesType {
  challengesId: string;
  insuranceId: string;
  name: string;
  description: string;
  challenge: string;
  tokenPrize: string;
  claimedUsers: string[];
  createdAt: string;
}
