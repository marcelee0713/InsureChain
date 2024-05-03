import { Link } from "react-router-dom";
import { ChallengeButtonStates } from "./challenge.button_states";

interface props {
  uid: string;
  insuranceName: string;
  insuranceId: string;
  challangeName: string;
  challengeId: string;
  tokenPrize: string;
  description: string;
  createdAt: string;
  finishedAt?: string;
  status: string;
  challengeKey: string;
  address: string;
}

export const ChallengeBox = (data: props) => {
  return (
    <div className="flex gap-2 justify-between items-center h-[110px] bg-boxColor text-primary border rounded-md shadow-lg py-5 px-6">
      <div className="flex flex-col text-sm">
        <div className="flex gap-[2px] text-[16px]">
          <Link
            to={`/home/insurance/${data.insuranceId}`}
            className="font-semibold hover:underline"
          >
            {data.insuranceName}
          </Link>
          •<span className="font-bold">{data.challangeName}</span>•
          <span className="font-bold">{`${data.tokenPrize} tokens`}</span>
        </div>
        <div>{data.description}</div>
        <div className="flex gap-[2px] text-[11px]">
          <span>Posted on: {data.createdAt}</span>•
          <span className="font-bold">{data.status}</span>
          {data.finishedAt && (
            <span className="font-bold"> on {data.finishedAt}</span>
          )}
        </div>
      </div>
      <ChallengeButtonStates
        status={data.status}
        challengeId={data.challengeId}
        insuranceId={data.insuranceId}
        uid={data.uid}
        challengeKey={data.challengeKey}
        address={data.address}
        tokenPrize={data.tokenPrize}
      />
    </div>
  );
};
