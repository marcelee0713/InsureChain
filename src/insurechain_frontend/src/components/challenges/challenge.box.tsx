import useSWR from "swr";
import {
  ChallengesType,
  InsuranceType,
  challengeStatus,
} from "../../interfaces/insurance.interface";
import { formatDate, formatDateFromTimestamp } from "../../utils/formatDate";
import { getInsurance } from "../../fetchers/insurance.fetchers";

interface props {
  challengeData: ChallengesType;
  uid: string;
}

export const ChallengeBox = ({ challengeData, uid }: props) => {
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

  return (
    <div className="flex gap-2 justify-between items-center h-[110px] bg-boxColor border border-secondary rounded-md shadow-lg py-5 px-6">
      <div className="flex flex-col text-sm">
        <div className="flex gap-[2px] text-[16px]">
          <span className="font-semibold">{insuranceData?.name}</span>•
          <span className="font-bold">{challengeData.name}</span>•
          <span className="font-bold">{`${challengeData.tokenPrize} tokens`}</span>
        </div>
        <div>{challengeData.description}</div>
        <div className="flex gap-[2px] text-[11px]">
          <span>Posted on: {formatDate(challengeData.createdAt)}</span>•
          <span className="font-bold">{status}</span>
          {finishedDate && (
            <span className="font-bold"> on {finishedDate}</span>
          )}
        </div>
      </div>
      <ButtonStates status={status} />
    </div>
  );
};

interface buttonStatesProps {
  status: challengeStatus | string;
}

const ButtonStates = ({ status }: buttonStatesProps) => {
  const defaultStyle =
    "border border-secondary text-xs font-bold rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-primary transition-colors ";

  if (status === "AVAILABLE") {
    return (
      <div
        onClick={() => {}}
        className={`${defaultStyle}` + "w-[150px] h-[40px] duration-300"}
      >
        START
      </div>
    );
  }

  if (status === "ON-GOING") {
    return (
      <div className="flex gap-1 w-[150px] h-[40px]">
        <div onClick={() => {}} className={`${defaultStyle}` + "flex-1"}>
          CANCEL
        </div>

        <div onClick={() => {}} className={`${defaultStyle}` + "flex-1"}>
          FINISH
        </div>
      </div>
    );
  }
};
