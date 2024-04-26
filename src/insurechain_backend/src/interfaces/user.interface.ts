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
