import { useState } from "react";
import {
  ChallengesType,
  InsuranceType,
} from "../../interfaces/insurance.interface";
import { ChallengesStates } from "../challenges/challenge.states";
import { Modal } from "../modals/modal";
import { Error, Loading } from "../univeral_states/states";
import { ModalMode } from "../../types/modal";
import { applyInsurance } from "../../api/fetchers/insurance.fetchers";
import { CallbacksInterface } from "../../api/calls/auth.callbacks";

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
  const [modal, setModal] = useState(false);
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");
  const [mode, setMode] = useState<ModalMode>("CONFIRMATION");
  const [onClick, setOnClick] = useState<VoidFunction>();
  const [canClickOutside, setCanClickOutside] = useState(true);

  const cb: CallbacksInterface = {
    onLoading() {
      setCanClickOutside(false);
      setMode("LOADING");
    },

    onError(result) {
      setCanClickOutside(true);
      setMode("ERROR");
      setText("Something went wrong!");
      setSubText(result);
      setOnClick(() => () => {
        setModal(false);
      });
    },

    onSuccess(result) {
      setCanClickOutside(true);
      setMode("SUCCESS");
      setText("Success");
      setSubText(result);
      setOnClick(() => () => {
        setModal(false);
      });
    },
  };

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
            onClick={() => {
              setModal(true);
              setText("Confirmation");
              setSubText(
                `Are you sure you want to apply to ${data.name}? It requires ${data.requiredTokens} tokens.`
              );
              setMode("CONFIRMATION");
              setOnClick(
                () => async () =>
                  await applyInsurance(uid, data.insuranceId, cb)
              );
            }}
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

      {modal && (
        <Modal
          text={text}
          subText={subText}
          setModal={setModal}
          mode={mode}
          onClose={() => setModal(false)}
          onClick={onClick}
          canCloseOutside={canClickOutside}
        />
      )}
    </div>
  );
};
