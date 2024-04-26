import useSWR from "swr";
import {
  ChallengesType,
  InsuranceType,
} from "../../interfaces/insurance.interface";
import { formatDate, formatDateFromTimestamp } from "../../utils/formatDate";
import { getInsurance } from "../../api/fetchers/insurance.fetchers";
import { ChallengeBox } from "./challenge.box";

interface props {
  challengeData: ChallengesType;
  uid: string;
  input: string;
  onStatus: string;
  challengeKey: string;
}

export const ChallengeFilteredBox = ({
  challengeData,
  uid,
  input,
  onStatus,
  challengeKey,
}: props) => {
  let status = "AVAILABLE";
  let finishedDate: string | undefined;

  if (challengeData.userStatus.length === 0) {
    status = "AVAILABLE";
  } else {
    challengeData.userStatus.forEach((val) => {
      if (val.uid !== uid) return;

      status = val.status;

      if (val.status === "FINISHED" && val.finishedAt) {
        finishedDate = formatDateFromTimestamp(val.finishedAt);
      }
    });
  }

  const { data: insuranceData } = useSWR<InsuranceType>(
    `${challengeData.insuranceId}:${challengeData.challengesId}`,
    getInsurance
  );

  const onFiltered = onStatus === status && onStatus !== "ALL";

  const notFiltered = onStatus === "ALL";

  const insuranceName = insuranceData
    ? insuranceData.name
    : "Insurance Company";

  const searching =
    input !== "" &&
    (insuranceName.toLowerCase().includes(input.toLowerCase()) ||
      challengeData.name.toLowerCase().includes(input.toLowerCase()));

  const notSearching = input === "";

  // I tried everything to make this visually good but holy shit.
  // This hurts my eyes even though I can understand it
  // As long as it works, it works ¯\_(ツ)_/¯

  if (searching) {
    if (onFiltered) {
      return (
        <ChallengeBox
          {...challengeData}
          uid={uid}
          insuranceName={insuranceName}
          challengeId={challengeData.challengesId}
          challangeName={challengeData.name}
          status={status}
          createdAt={formatDate(challengeData.createdAt)}
          finishedAt={finishedDate}
          challengeKey={challengeKey}
        />
      );
    } else if (notFiltered) {
      return (
        <ChallengeBox
          {...challengeData}
          uid={uid}
          insuranceName={insuranceName}
          challengeId={challengeData.challengesId}
          challangeName={challengeData.name}
          status={status}
          createdAt={formatDate(challengeData.createdAt)}
          finishedAt={finishedDate}
          challengeKey={challengeKey}
        />
      );
    }
  } else if (notSearching) {
    if (onFiltered) {
      return (
        <ChallengeBox
          {...challengeData}
          uid={uid}
          insuranceName={insuranceName}
          challengeId={challengeData.challengesId}
          challangeName={challengeData.name}
          status={status}
          createdAt={formatDate(challengeData.createdAt)}
          finishedAt={finishedDate}
          challengeKey={challengeKey}
        />
      );
    } else if (notFiltered) {
      return (
        <ChallengeBox
          {...challengeData}
          uid={uid}
          insuranceName={insuranceName}
          challengeId={challengeData.challengesId}
          challangeName={challengeData.name}
          status={status}
          createdAt={formatDate(challengeData.createdAt)}
          finishedAt={finishedDate}
          challengeKey={challengeKey}
        />
      );
    }
  }
};
