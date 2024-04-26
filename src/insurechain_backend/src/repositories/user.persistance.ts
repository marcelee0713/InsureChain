import {
  activities,
  activityIds,
  activityType,
  eventType,
  userType,
} from "../interfaces/user.interface";
import { removeOldChallengesActivity } from "../utils/activity";

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

export { getUser, updateActivity };
