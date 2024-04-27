export interface User {
  uid: string;
  username: string;
  email: string;
  token: string;
  activities: Activities[];
  createdAt: string;
}

export interface Activities {
  event: EventType;
  activity: ActivityType;
  activityIds?: ActivityIds; // Should only work for challenges
  createdAt: string;
}

export type EventType = "START" | "REMOVE" | "DONE";

export type ActivityType = "CHALLENGES" | "OTHER";

export interface ActivityIds {
  insuranceId: string;
  challengeId: string;
  statusId: string;
}

export interface ProfileData {
  uid: string;
  username: string;
  tokens: string;
  joinedAt: string;
  completedChallengesCount: string;
  onGoingChallengesCount: string;
  gainedTokensToday: string;
  latestChallenge?: ProfileChallengeData;
  latestCompletedChallenge?: ProfileChallengeData;
  highestTokenGained?: ProfileChallengeData;
}

export interface ProfileChallengeData {
  insuranceId: string;
  challengeId: string;
  challengeName: string;
  insuranceName: string;
  issuedAt?: string;
  token: string;
}
