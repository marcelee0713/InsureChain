import { insuranceType } from "../interfaces/insurance.interface";
import {
  activities,
  activityIds,
  activityType,
  eventType,
  profileData,
  userType,
} from "../interfaces/user.interface";
import { removeOldChallengesActivity } from "../utils/activity";
import {
  UserActivitiesDataHandler,
  UserChallengesDataHandler,
  UserTokenDataHandler,
  tokenData,
} from "../utils/user.data.handler";

const getUser = async (uid: string, useDb: userType[]): Promise<userType> => {
  try {
    let user: userType | undefined = undefined;

    for (let i = 0; i < useDb.length; i++) {
      if (uid === useDb[i].uid) {
        user = useDb[i];
        break;
      }
    }

    if (!user) throw new Error("The following user can not be found!");

    return user;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

const updateActivity = async (
  uid: string,
  activity: activityType,
  event: eventType,
  userDb: userType[],
  activityIds?: activityIds
): Promise<void> => {
  try {
    let user: userType | undefined = undefined;

    for (let i = 0; i < userDb.length; i++) {
      if (uid === userDb[i].uid) {
        user = userDb[i];
        break;
      }
    }

    if (!user) throw new Error("The following user can not be found!");

    if (activity === "CHALLENGES" && activityIds) {
      const activity: activities = {
        activity: "CHALLENGES",
        createdAt: Date.now().toString(),
        event: "START",
        activityIds: activityIds,
      };

      switch (event) {
        case "START":
          activity.event = "START";

          break;
        case "REMOVE":
          removeOldChallengesActivity({
            activityIds: activityIds,
            user: user,
            userDb: userDb,
          });

          activity.event = "REMOVE";

          break;
        case "DONE":
          removeOldChallengesActivity({
            activityIds: activityIds,
            user: user,
            userDb: userDb,
          });

          activity.event = "DONE";

          break;
      }

      user.activities.unshift(activity);
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

const profileData = async (
  uid: string,
  userDb: userType[],
  insuranceDb: insuranceType[]
): Promise<profileData> => {
  try {
    let user: userType | undefined = undefined;

    for (let i = 0; i < userDb.length; i++) {
      if (uid === userDb[i].uid) {
        user = userDb[i];
        break;
      }
    }

    if (!user) throw new Error("The following user can not be found!");

    const data: profileData = {
      uid: uid,
      username: user.username,
      tokens: user.token,
      joinedAt: user.createdAt,
      completedChallengesCount: "0",
      onGoingChallengesCount: "0",
      gainedTokensToday: "0",
    };

    const tokenData: tokenData = UserTokenDataHandler({
      insuranceDb: insuranceDb,
      user: user,
    });

    data.completedChallengesCount = UserActivitiesDataHandler({
      user: user,
      mode: "COMPLETED_CHALLENGES",
    });

    data.onGoingChallengesCount = UserActivitiesDataHandler({
      user: user,
      mode: "ON-GOING_CHALLENGES",
    });

    data.latestChallenge = UserChallengesDataHandler({
      user: user,
      insuranceDb: insuranceDb,
      activity: "CHALLENGES",
      event: "START",
    });

    data.latestCompletedChallenge = UserChallengesDataHandler({
      user: user,
      insuranceDb: insuranceDb,
      activity: "CHALLENGES",
      event: "DONE",
    });

    data.gainedTokensToday = tokenData.gainedTokensToday;
    data.highestTokenGained = tokenData.highestTokenGainedObj;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

export { getUser, updateActivity, profileData };
