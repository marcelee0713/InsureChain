import {
  ChallengesType,
  InsuranceType,
} from "../../interfaces/insurance.interface";
import { ChallengesStates } from "../challenges/challenge.states";
import { Error, Loading } from "../univeral_states/states";

interface props {
  data: InsuranceType | undefined;
  isLoading: boolean;
  error: any;
  loadingChallenges?: boolean;
  errorChallenges?: any;
  dataChallenges: ChallengesType[] | undefined;
  uid: string;
  challengeKey: string;
}

export const InsuranceInfo = ({
  data,
  error,
  isLoading,
  dataChallenges,
  errorChallenges,
  loadingChallenges,
  uid,
  challengeKey,
}: props) => {
  if (isLoading || loadingChallenges)
    return <Loading text="Fetching insurance data..." />;

  if (error || !data || !dataChallenges || errorChallenges) return <Error />;

  return (
    <div className="flex-1 flex flex-col">
      <div
        style={{ backgroundImage: `url(${data.image})` }}
        className="flex flex-col h-[400px] bg-cover shadow-lg animate-animfadeAbove"
      >
        <div className="flex-1 flex flex-col bg-black opacity-70 items-center justify-center">
          <h1 className="font-bold text-4xl duration-300 text-white animate-animfadeBelow">
            {data.name}
          </h1>

          <h1 className="font-normal text-base duration-300 text-white text-center animate-animfadeBelow">
            {data.description}
          </h1>
        </div>
      </div>

      <div className="flex flex-col px-12 py-10 gap-8">
        <div className="flex flex-col gap-2 animate-animfadeLeftSide">
          <div className="font-bold text-xl">Description</div>
          <div className="font-light text-base">{data.longDescription}</div>
        </div>

        <div className="flex flex-col gap-2 animate-animfadeLeftSide">
          <div className="font-bold text-xl">Challenges</div>
          <ChallengesStates
            data={dataChallenges}
            uid={uid}
            error={errorChallenges}
            loading={loadingChallenges}
            challengeKey={challengeKey}
          />
        </div>
      </div>
    </div>
  );
};
