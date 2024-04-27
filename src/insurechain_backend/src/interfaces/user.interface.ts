export interface userType {
  uid: string;
  username: string;
  email: string;
  password: string;
  token: string;
  activities: activities[];
  createdAt: string;
}

export interface userOnDbType {
  uid: string;
  password: string;
}

export interface activities {
  event: eventType;
  activity: activityType;
  activityIds?: activityIds; // Should only work for challenges
  createdAt: string;
}

export type eventType = "START" | "REMOVE" | "DONE";

export type activityType = "CHALLENGES" | "OTHER";

export interface activityIds {
  insuranceId: string;
  challengeId: string;
  statusId: string;
}

export interface profileData {
  uid: string;
  username: string;
  tokens: string;
  joinedAt: string;
  completedChallengesCount: string;
  onGoingChallengesCount: string;
  gainedTokensToday: string;
  latestChallenge?: profileChallengeData;
  latestCompletedChallenge?: profileChallengeData;
  highestTokenGained?: profileChallengeData;
}

export interface profileChallengeData {
  insuranceId: string;
  challengeId: string;
  challengeName: string;
  insuranceName: string;
  issuedAt?: string;
  token: string;
}
