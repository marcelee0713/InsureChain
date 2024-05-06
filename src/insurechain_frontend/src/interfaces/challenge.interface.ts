import { challengeStatus } from "./insurance.interface";

export interface UpdateChallengeBody {
  userId: string;
  insuranceId: string;
  challengeId: string;
  newStatus: challengeStatus;
  walletAddress?: string;
}
