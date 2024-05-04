import { useState } from "react";
import { CallbacksInterface } from "../../api/calls/auth.callbacks";
import { UpdateChallenge } from "../../api/calls/challenges.api";
import { UpdateChallengeBody } from "../../interfaces/challenge.interface";
import { useSWRConfig } from "swr";
import {
  useAccount,
  usePrepareTransactionRequest,
  useWriteContract,
  useSendTransaction,
} from "wagmi";
import { BaseError, parseEther } from "viem";
import { Modal } from "../modals/modal";

interface buttonStatesProps {
  status: string;
  uid: string;
  insuranceId: string;
  challengeId: string;
  challengeKey: string;
  address: string;
  tokenPrize: string;
}

export const ChallengeButtonStates = ({
  status,
  challengeId,
  insuranceId,
  uid,
  challengeKey,
  address,
  tokenPrize,
}: buttonStatesProps) => {
  // Also, challenges. Make sure to add a token whenever the user finished a challenge
  // Also reduce the amount of the insurance company.

  const [modal, setModal] = useState(false);
  const { isPending, sendTransaction } = useSendTransaction();
  const account = useAccount();

  const smallerValuePrice = parseInt(tokenPrize) / 1000;
  const totalPrice = smallerValuePrice.toString();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [subText, setSubText] = useState("");

  const { mutate } = useSWRConfig();
  const [isDisable, setOnDisable] = useState(false);

  const defaultStyle =
    "text-xs font-bold bg-primary text-boxColor rounded-xl flex items-center justify-center cursor-pointer hover:bg-boxColor border border-primary hover:text-primary transition-colors ";

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

  if (loading || isPending) {
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
          onClick={() => {
            sendTransaction(
              {
                to: account.address as `0x${string}`,
                value: parseEther(totalPrice),
              },
              {
                async onSuccess() {
                  await UpdateChallenge(body, cb);
                },
                onError(error) {
                  setModal(true);
                  setSubText((error as BaseError).shortMessage);
                },
              }
            );
          }}
        >
          FINISH
        </button>

        {modal && (
          <Modal
            text={"Something went wrong!"}
            subText={subText}
            setModal={setModal}
            mode={"ERROR"}
            onClose={() => setModal(false)}
            onClick={() => setModal(false)}
          />
        )}
      </div>
    );
  }
};
