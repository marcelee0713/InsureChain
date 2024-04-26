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
        <div className="flex-1 flex flex-col gap-2 bg-black opacity-70 items-center justify-center">
          <h1 className="font-bold text-4xl duration-300 text-white animate-animfadeBelow">
            {data.name}
          </h1>

          <p className="font-normal text-base duration-300 text-white text-center animate-animfadeBelow">
            {data.description}
          </p>

          <button
            className="flex items-center justify-center text-base duration-300 text-white 
          bg-transparent h-10 w-[150px] border border-secondary rounded-lg animate-animfadeBelow hover:bg-white hover:text-black"
          >
            APPLY
          </button>
        </div>
      </div>

      <div className="flex flex-col px-12 py-10 gap-8 animate-animfadeLeftSide">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl">Description</div>
          <div className="font-light text-base">{data.longDescription}</div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl">Benefits</div>
          <ol className="flex flex-col gap-2">
            {data.benefits.map((val) => (
              <li
                key={val.name + val.description}
                className="flex flex-col gap-[2px] justify-center"
              >
                <div>
                  <span className="font-bold text-base">{val.name}:</span>
                </div>

                <span className="font-base text-sm">{val.description}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-2">
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
