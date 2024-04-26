import { useState } from "react";
import { CallbacksInterface } from "../../api/calls/auth.callbacks";
import { UpdateChallenge } from "../../api/calls/challenges.api";
import { UpdateChallengeBody } from "../../interfaces/challenge.interface";
import { useSWRConfig } from "swr";

interface buttonStatesProps {
  status: string;
  uid: string;
  insuranceId: string;
  challengeId: string;
  challengeKey: string;
}

export const ChallengeButtonStates = ({
  status,
  challengeId,
  insuranceId,
  uid,
  challengeKey,
}: buttonStatesProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { mutate } = useSWRConfig();
  const [isDisable, setOnDisable] = useState(false);

  const defaultStyle =
    "border border-secondary text-xs font-bold rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-primary transition-colors ";

  const cb: CallbacksInterface = {
    onLoading() {
      setOnDisable(true);
      setLoading(true);
      setError("");
    },

    onError(result) {
      setError(result);
      setOnDisable(false);
      setLoading(false);
    },

    onSuccess(result) {
      mutate(challengeKey);
      setOnDisable(false);
      setLoading(false);
      setError("");
    },
  };

  if (loading) {
    return (
      <div className="flex gap-1">
        Loading
        <span className="animate-bounce [animation-delay:-0.3s]">.</span>
        <span className="animate-bounce [animation-delay:-0.15s]">.</span>
        <span className="animate-bounce ">.</span>
      </div>
    );
  }

  if (error) {
    return <div className="">{error}</div>;
  }

  if (status === "AVAILABLE") {
    const body: UpdateChallengeBody = {
      challengeId: challengeId,
      insuranceId: insuranceId,
      newStatus: "ON-GOING",
      userId: uid,
    };

    return (
      <button
        disabled={isDisable}
        className={`${defaultStyle}` + "w-[150px] h-[40px] duration-300"}
        onClick={async () => await UpdateChallenge(body, cb)}
      >
        START
      </button>
    );
  }

  if (status === "ON-GOING") {
    const body: UpdateChallengeBody = {
      challengeId: challengeId,
      insuranceId: insuranceId,
      newStatus: "FINISHED",
      userId: uid,
    };

    return (
      <div className="flex gap-1 w-[150px] h-[40px]">
        <button
          disabled={isDisable}
          className={`${defaultStyle}` + "flex-1"}
          onClick={async () => {
            const newBody: UpdateChallengeBody = {
              challengeId: challengeId,
              insuranceId: insuranceId,
              newStatus: "CANCEL",
              userId: uid,
            };

            await UpdateChallenge(newBody, cb);
          }}
        >
          CANCEL
        </button>

        <button
          disabled={isDisable}
          className={`${defaultStyle}` + "flex-1"}
          onClick={async () => await UpdateChallenge(body, cb)}
        >
          FINISH
        </button>
      </div>
    );
  }
};
