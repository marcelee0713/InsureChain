import { FaClock, FaMedal, FaRunning } from "react-icons/fa";
import { MdOutlineFormatListNumberedRtl } from "react-icons/md";
import { BiSolidCoinStack } from "react-icons/bi";
import { ProfileData } from "../../interfaces/user.interface";
import { UserInfoBox } from "../dashboard/user_info/user_info.box";
import { formatDateFromTimestamp } from "../../utils/formatDate";
import { GiShrug } from "react-icons/gi";

export const ProfileStats = (data: ProfileData) => {
  const date = new Date();
  const currentDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="flex-1 grid grid-cols-myGridTemplate gap-5 px-8 pb-5">
      {data.latestChallenge ? (
        <UserInfoBox
          headText={`Latest Challenge • ${data.latestChallenge.challengeName}`}
          subText={`Contains: ${data.latestChallenge.token} Tokens`}
          icon={FaClock}
          iconSize={75}
          altText={
            "Issued at: " +
            formatDateFromTimestamp(data.latestChallenge.issuedAt as string)
          }
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
      {data.latestCompletedChallenge ? (
        <UserInfoBox
          headText={`Latest Completed Challenge • ${data.latestCompletedChallenge.challengeName}`}
          subText={`Contains: ${data.latestCompletedChallenge.token} Tokens`}
          icon={FaMedal}
          iconSize={75}
          altText={
            "Finished at: " +
            formatDateFromTimestamp(
              data.latestCompletedChallenge.issuedAt as string
            )
          }
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
      {data.highestTokenGained ? (
        <UserInfoBox
          headText={`Highest Token Gained • ${data.highestTokenGained?.challengeName}`}
          subText={`Contains: ${data.highestTokenGained?.token} Tokens`}
          icon={BiSolidCoinStack}
          iconSize={75}
        />
      ) : (
        <UserInfoBox
          headText="Don't have tokens?"
          subText="Why not complete a challenge?"
          icon={GiShrug}
          iconSize={50}
          width="flex-1"
        />
      )}
      <UserInfoBox
        headText={`Amount of Completed Challenges`}
        subText={`Completed Challenges: ${data.completedChallengesCount}`}
        icon={MdOutlineFormatListNumberedRtl}
        iconSize={75}
      />
      <UserInfoBox
        headText={`Amount of On-going Challenges`}
        subText={`On-going challenges: ${data.onGoingChallengesCount}`}
        icon={FaRunning}
        iconSize={75}
      />
      <UserInfoBox
        headText={`Tokens you gained today!`}
        subText={`${data.gainedTokensToday ?? "0"} Tokens`}
        icon={BiSolidCoinStack}
        iconSize={75}
        altText={"Date today: " + currentDate}
      />
    </div>
  );
};
