import { insuranceType } from "../interfaces/insurance.interface";
import {
  activityType,
  eventType,
  profileChallengeData,
  userType,
} from "../interfaces/user.interface";

interface props {
  user: userType;
  insuranceDb: insuranceType[];
  activity: activityType;
  event: eventType;
}

export const UserChallengesDataHandler = ({
  activity,
  event,
  insuranceDb,
  user,
}: props): profileChallengeData | undefined => {
  let data: profileChallengeData | undefined;

  let latestChallengeId: string | undefined;
  let latestInsuranceId: string | undefined;
  let issuedLatestAt: string = "";

  for (let i = 0; i < user.activities.length; i++) {
    const hasLatest =
      user.activities[i].activity === activity &&
      user.activities[i].event === event;
    if (hasLatest) {
      latestChallengeId = user.activities[i].activityIds?.challengeId;
      latestInsuranceId = user.activities[i].activityIds?.insuranceId;
      issuedLatestAt = user.activities[i].createdAt;
      break;
    }
  }

  for (let i = 0; i < insuranceDb.length; i++) {
    if (!latestChallengeId || !latestInsuranceId) break;

    if (insuranceDb[i].insuranceId === latestInsuranceId) {
      for (let j = 0; j < insuranceDb[i].challenges.length; j++) {
        if (insuranceDb[i].challenges[j].challengesId === latestChallengeId) {
          data = {
            insuranceId: latestInsuranceId,
            challengeId: latestChallengeId,
            challengeName: insuranceDb[i].challenges[j].name,
            insuranceName: insuranceDb[i].name,
            issuedAt: issuedLatestAt,
            token: insuranceDb[i].challenges[j].tokenPrize,
          };
          break;
        }
      }
    }
  }

  return data;
};

interface userActProp {
  user: userType;
  mode: "COMPLETED_CHALLENGES" | "ON-GOING_CHALLENGES";
}

export const UserActivitiesDataHandler = ({
  user,
  mode,
}: userActProp): string => {
  let amount = 0;
  for (let i = 0; i < user.activities.length; i++) {
    const firstCondition =
      mode === "COMPLETED_CHALLENGES" &&
      user.activities[i].activity === "CHALLENGES" &&
      user.activities[i].event === "DONE";

    const secondCondition =
      mode === "ON-GOING_CHALLENGES" &&
      user.activities[i].activity === "CHALLENGES" &&
      user.activities[i].event === "START";

    if (firstCondition) {
      amount++;
    } else if (secondCondition) {
      amount++;
    }
  }

  return amount.toString();
};

interface tokenProp {
  user: userType;
  insuranceDb: insuranceType[];
}

export interface tokenData {
  highestTokenGainedObj?: profileChallengeData;
  gainedTokensToday: string;
}

export const UserTokenDataHandler = ({
  insuranceDb,
  user,
}: tokenProp): tokenData => {
  let data: tokenData = {
    gainedTokensToday: "0",
  };

  let currentTokensGainedToday = 0;
  let currentHighestToken = 0;

  const date = new Date();
  const currentDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  for (let i = 0; i < insuranceDb.length; i++) {
    for (let j = 0; j < insuranceDb[i].challenges.length; j++) {
      if (insuranceDb[i].challenges[j].userStatus.length !== 0) {
        const statuses = insuranceDb[i].challenges[j].userStatus;
        const currentTokenPrize = parseInt(
          insuranceDb[i].challenges[j].tokenPrize
        );
        for (let k = 0; k < statuses.length; k++) {
          const condition =
            statuses[k].uid === user.uid && statuses[k].status === "FINISHED";
          if (condition) {
            if (currentTokenPrize > currentHighestToken) {
              currentHighestToken = currentTokenPrize;

              data.highestTokenGainedObj = {
                insuranceId: insuranceDb[i].insuranceId,
                challengeId: insuranceDb[i].challenges[j].challengesId,
                challengeName: insuranceDb[i].challenges[j].name,
                insuranceName: insuranceDb[i].name,
                token: currentHighestToken.toString(),
              };
            }

            const timestampStr = statuses[k].finishedAt as string;
            const timestamp = parseInt(timestampStr, 10); // Parse string to integer
            const date = new Date(timestamp);
            const formattedDate = date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            });

            if (currentDate === formattedDate) {
              currentTokensGainedToday += currentTokenPrize;
            }
          }
        }
      }
    }
  }

  data.gainedTokensToday = currentTokensGainedToday.toString();

  return data;
};
