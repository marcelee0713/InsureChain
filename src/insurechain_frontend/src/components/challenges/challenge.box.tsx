import {
  ChallengesType,
  challengeStatus,
} from "../../interfaces/insurance.interface";
import { formatDate } from "../../utils/formatDate";

interface props {
  data: ChallengesType;
  uid: string;
}

export const ChallengeBox = ({ data, uid }: props) => {
  let status = "AVAILABLE";

  if (data.userStatus.length === 0) {
    status = "AVAILABLE";
  } else {
    data.userStatus.forEach((val) => {
      if (val.uid !== uid) return;

      status = val.status;
    });
  }

  return (
    <div className="flex gap-2 justify-between items-center h-[110px] bg-boxColor border border-secondary rounded-md shadow-lg py-5 px-6">
      <div className="flex flex-col text-sm">
        <div className="flex gap-[2px] text-[16px]">
          <span className="font-semibold">{"Insurance Company"}</span>•
          <span className="font-bold">{data.name}</span>•
          <span className="font-bold">{`${data.tokenPrize} tokens`}</span>
        </div>
        <div>{data.description}</div>
        <div className="flex gap-[2px] text-[11px]">
          <span>Posted on: {formatDate(data.createdAt)}</span>•
          <span className="font-bold">{status}</span>
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
  if (status === "AVAILABLE") {
    return (
      <div
        onClick={() => {}}
        className="w-[200px] h-[45px] border border-secondary text-sm font-bold rounded-xl flex items-center justify-center cursor-pointer"
      >
        START
      </div>
    );
  }
};
