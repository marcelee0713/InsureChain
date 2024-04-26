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
