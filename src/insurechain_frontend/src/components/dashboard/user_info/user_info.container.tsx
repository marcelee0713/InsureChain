import useSWR from "swr";
import { getChallenge } from "../../../api/fetchers/challenges.fetchers";
import { ChallengesType } from "../../../interfaces/insurance.interface";
import { User } from "../../../interfaces/user.interface";
import { formatDateFromTimestamp } from "../../../utils/formatDate";
import { FaClock, FaMedal } from "react-icons/fa";
import { GiShrug } from "react-icons/gi";
import { UserInfoBox } from "./user_info.box";

interface props {
  userData: User;
}

export const UserInfoContainer = ({ userData }: props) => {
  let latestChallengeId: string | undefined;
  let latestInsuranceId: string | undefined;
  let hasLatest = true;
  let issuedAt: string | undefined;

  let completedChallengeId: string | undefined;
  let completedInsuranceId: string | undefined;
  let hadCompleted = true;
  let finishedAt: string | undefined;

  const isEmpty = userData.activities.length === 0;

  for (let i = 0; i < userData.activities.length; i++) {
    if (
      userData.activities[i].activity === "CHALLENGES" &&
      userData.activities[i].event === "START"
    ) {
      hasLatest = true;
      latestInsuranceId = userData.activities[i].activityIds?.insuranceId;
      latestChallengeId = userData.activities[i].activityIds?.challengeId;
      issuedAt = formatDateFromTimestamp(userData.activities[i].createdAt);
      break;
    }
    hasLatest = false;
  }

  for (let i = 0; i < userData.activities.length; i++) {
    if (
      userData.activities[i].activity === "CHALLENGES" &&
      userData.activities[i].event === "DONE"
    ) {
      hadCompleted = true;
      completedInsuranceId = userData.activities[i].activityIds?.insuranceId;
      completedChallengeId = userData.activities[i].activityIds?.challengeId;
      finishedAt = formatDateFromTimestamp(userData.activities[i].createdAt);
      break;
    }
    hadCompleted = false;
  }

  const latestFetchable = !isEmpty && hasLatest;
  const completedFetchable = !isEmpty && hadCompleted;

  const {
    data: latestChallengeData,
    isLoading: latestLoading,
    error: latestHasError,
  } = useSWR<ChallengesType>(
    latestFetchable ? `${latestInsuranceId}/${latestChallengeId}` : null,
    getChallenge
  );

  const {
    data: completedData,
    isLoading: completedLoading,
    error: completedHasError,
  } = useSWR<ChallengesType>(
    completedFetchable
      ? `${completedInsuranceId}/${completedChallengeId}`
      : null,
    getChallenge
  );

  const loading = latestLoading || completedLoading;

  const hasErrors = completedHasError || latestHasError;

  if (loading) {
    return (
      <div className="w-full h-[100px] rounded-lg bg-boxColor border border-secondary animate-pulse"></div>
    );
  }

  if (hasErrors) {
    return (
      <div className="w-full h-[100px] rounded-lg bg-boxColor border border-secondary animate-pulse flex items-center justify-center">
        Something went terribly wrong! Please contact the devs
      </div>
    );
  }

  return (
    <div className="h-[100px] flex gap-5">
      {latestChallengeData ? (
        <UserInfoBox
          headText={`Latest Challenge • ${latestChallengeData.name}`}
          subText={`Contains: ${latestChallengeData.tokenPrize} Tokens`}
          icon={FaClock}
          iconSize={50}
          width="flex-1"
          altText={"Issued at: " + issuedAt}
        />
      ) : (
        <UserInfoBox
          headText="You're not currently taking a challenge"
          subText="Why not start one?"
          icon={GiShrug}
          iconSize={50}
          width="flex-1"
        />
      )}
      {completedData ? (
        <UserInfoBox
          headText={`Latest Completed Challenge • ${completedData.name}`}
          subText={`Gained: ${completedData.tokenPrize} Tokens`}
          icon={FaMedal}
          iconSize={50}
          width="flex-1"
          altText={"Finished at: " + finishedAt}
        />
      ) : (
        <UserInfoBox
          headText="You haven't finish any challenges yet"
          subText="Why not also finish one?"
          icon={GiShrug}
          iconSize={50}
          width="flex-1"
        />
      )}
    </div>
  );
};
