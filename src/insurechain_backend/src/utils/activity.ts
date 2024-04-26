import { activityIds, userType } from "../interfaces/user.interface";

interface props {
  userDb: userType[];
  activityIds: activityIds;
  user: userType;
}

const removeOldChallengesActivity = ({ activityIds, user, userDb }: props) => {
  // Delete the old activity
  userDb.forEach((userVal, userIndex) => {
    if (userVal === user) {
      userVal.activities.forEach((activityVal, actIndex) => {
        const condition =
          activityVal.activity === "CHALLENGES" &&
          activityVal.event === "START" &&
          activityVal.activityIds;
        if (condition) {
          const matches =
            activityVal.activityIds?.challengeId === activityIds.challengeId &&
            activityVal.activityIds?.insuranceId === activityIds.insuranceId &&
            activityVal.activityIds?.statusId === activityIds.statusId;
          if (matches) {
            userDb[userIndex].activities.splice(actIndex, 1);
            return;
          }
        }
      });
    }
  });
};

export { removeOldChallengesActivity };
