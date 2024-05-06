import { useOutletContext } from "react-router-dom";
import { useUser } from "../../layouts/InsuranceCompanyLayout";
import { InputTextInsurance } from "../../components/inputs/input_texts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateInsuranceFormData } from "../../types/types.auth";
import { insuranceSchema } from "../../schemas/insurance.schemas";
import { useState } from "react";
import { CallbacksInterface } from "../../api/calls/auth.callbacks";
import useSWR, { useSWRConfig } from "swr";
import { AuthLoading } from "../../components/auth/loading";
import { AuthStates } from "../../components/auth/states";
import { CreateInsurance } from "../../api/calls/insurance.callback";
import { getInsurance } from "../../api/fetchers/insurance.fetchers";
import {
  ChallengesType,
  InsuranceType,
} from "../../interfaces/insurance.interface";
import { Error, Loading } from "../../components/univeral_states/states";
import { useAccount, useDisconnect, useSendTransaction } from "wagmi";
import { getChallengesFromInsurance } from "../../api/fetchers/challenges.fetchers";
import { formatDate } from "../../utils/formatDate";
import { Modal } from "../../components/modals/modal";
import { UpdateChallengeBody } from "../../interfaces/challenge.interface";
import { BaseError, parseEther } from "viem";
import { UpdateChallenge } from "../../api/calls/challenges.api";

const InsuranceLandingPage = () => {
  const { sendTransaction, isPending } = useSendTransaction();
  const account = useAccount();

  const { mutate } = useSWRConfig();
  const { uid, insuranceId, username } = useUser();
  const { disconnect } = useDisconnect();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [modal, setModal] = useState(false);

  const {
    data: insuranceData,
    isLoading: iLoading,
    error: iError,
  } = useSWR<InsuranceType>(`${insuranceId}:${uid}/insurance`, getInsurance);

  const challengesKey = `${insuranceId}:${uid}/challenges`;

  const {
    data: challengesData,
    isLoading: cLoading,
    error: cError,
  } = useSWR<ChallengesType[]>(challengesKey, getChallengesFromInsurance);

  const cb: CallbacksInterface = {
    onLoading() {
      setLoading(true);
      setError("");
    },

    onError(result) {
      setError(result);
      setLoading(false);
    },

    onSuccess(result) {
      setError("");
      mutate("/getUserSession");
    },
  };

  const pendingCb: CallbacksInterface = {
    onLoading() {
      setLoading(true);
      setError("");
    },

    onError(result) {
      setModal(true);
      setError(result);
      setLoading(false);
    },

    onSuccess(result) {
      mutate(challengesKey);
      setLoading(false);
      setError("");
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateInsuranceFormData>({
    resolver: zodResolver(insuranceSchema),
  });

  const tailwindStyle = `bg-primary border-boxColor border rounded-lg p-[36px] font-openSans flex flex-col 
  lg:min-w-[488px] w-[450px] sm:min-w-[200px] min-h-[700px]`;

  if (!insuranceId) {
    return (
      <div className="flex-1 flex justify-between items-center h-full w-full px-16 container mx-auto">
        <div className="flex flex-col gap-1">
          <div className="text-base">
            Hello <strong>{username}</strong>
          </div>
          <div className="text-sm">
            Seems like you haven't deployed any insurance company yet. Don't
            worry let's <strong>create</strong> one!
          </div>
        </div>
        {loading && (
          <AuthLoading
            tailwindStyle={`${tailwindStyle} items-center justify-center`}
          />
        )}

        {error && (
          <AuthStates
            style={`${tailwindStyle} items-center justify-center gap-2`}
            buttonType="SINGLE"
            header="Whoops, something wrong happened!"
            desc={error}
            type="ERROR"
            alt="Error image"
            onTapText="Try again"
            onTap={() => {
              setLoading(false);
              setError("");
            }}
          />
        )}

        {!loading && !error && (
          <form
            onSubmit={handleSubmit(
              async (data) => await CreateInsurance(data, uid, cb)
            )}
            className={tailwindStyle + " animate-animfadeRightSide"}
          >
            <div className="flex flex-col gap-2">
              <InputTextInsurance
                register={register}
                errorCatch={errors.insuranceName}
                label="Insurance Name"
                nameRegister="insuranceName"
              />
              <InputTextInsurance
                register={register}
                errorCatch={errors.description}
                label="Description"
                nameRegister="description"
              />
              <div className="flex flex-col gap-1">
                <InputTextInsurance
                  register={register}
                  errorCatch={errors.imageUrl}
                  label="Image (preferably wide resolution)"
                  nameRegister="imageUrl"
                />
                <div className="text-xs">
                  This input is optional and will use the default image instead
                  if left with no input.
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <InputTextInsurance
                  register={register}
                  errorCatch={errors.walletAddress}
                  label="Metamask Wallet Address"
                  nameRegister="walletAddress"
                />
                <div className="text-xs">
                  Don't have Metamask?{" "}
                  <a
                    className="font-bold hover:underline"
                    href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                  >
                    Click here!
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <InputTextInsurance
                  register={register}
                  errorCatch={errors.requiredTokens}
                  label="Required Tokens"
                  nameRegister="requiredTokens"
                />
                <div className="text-xs">
                  This section is for the consumers who wants to apply an
                  insurance to your company, and it requires a certain to amount
                  to apply.
                </div>
              </div>
              <InputTextInsurance
                register={register}
                errorCatch={errors.longDescription}
                label="Long Description"
                nameRegister="longDescription"
                inputType="textarea"
              />
            </div>
            <button
              type="submit"
              className="bg-boxColor text-primary hover:bg-primary hover:text-boxColor border hover:border-boxColor font-bold py-3 rounded-lg my-5 w-full font-openSans transition-colors duration-500 ease-in-out"
            >
              Create
            </button>
          </form>
        )}
      </div>
    );
  }

  if (iLoading || cLoading)
    return <Loading text="Fetching insurance data..." />;

  if (iError || !insuranceData || !challengesData) return <Error />;

  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-8">
      <div className="flex-1 flex flex-col">
        <div
          style={{ backgroundImage: `url(${insuranceData.image})` }}
          className="flex flex-col h-[400px] bg-cover shadow-lg animate-animfadeAbove"
        >
          <div className="flex-1 flex flex-col gap-2 bg-black opacity-70 items-center justify-center">
            <h1 className="font-bold text-4xl duration-300 text-white animate-animfadeBelow">
              {insuranceData.name}
            </h1>

            <p className="font-normal text-base duration-300 text-white text-center animate-animfadeBelow">
              {insuranceData.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col px-12 py-10 gap-8 animate-animfadeLeftSide">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="font-bold text-2xl">Hello {username}</div>
              <w3m-button label="Connect Metamask" />
            </div>
            <div
              onClick={() => {
                disconnect();
                localStorage.removeItem("uid");
                mutate("/getUserSession");
              }}
              className="font-bold text-base cursor-pointer "
            >
              Log out
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold text-xl">Description</div>
            <div className="font-light text-base">
              {insuranceData.longDescription}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="font-bold text-xl">Benefits</div>
            {insuranceData.benefits.length === 0 && (
              <div className="font-light text-base">
                You currently don't have data on this section!
              </div>
            )}
            <ol className="flex flex-col gap-2">
              {insuranceData.benefits.map((val) => (
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
            <div className="font-bold text-xl">Current Challenges</div>
            {challengesData.length === 0 && (
              <div className="font-light text-base">
                You currently don't have data on this section!
              </div>
            )}
            <div className="flex flex-col gap-5">
              {challengesData.map((val) => (
                <div className="flex gap-2 justify-between items-center h-[110px] bg-boxColor text-primary border rounded-md shadow-lg py-5 px-6">
                  <div className="flex flex-col text-sm">
                    <div className="flex gap-[2px] text-[16px]">
                      <span className="font-bold">{val.name}</span>•
                      <span className="font-bold">{`${val.tokenPrize} tokens`}</span>
                    </div>
                    <div>{val.description}</div>
                    <div className="flex gap-[2px] text-[11px]">
                      <span>Posted on: {formatDate(val.createdAt)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <div className="font-bold text-xl">Pending Challenges</div>
              <div className="flex flex-col text-sm">
                This is where the users submitted their work, check their work
                on the challenges you provided, if you want to approve them or
                not.
              </div>
            </div>
            <div className="flex flex-col gap-5">
              {challengesData.map((val) => {
                for (let i = 0; i < val.userStatus.length; i++) {
                  const userStatus = val.userStatus[i];
                  if (userStatus.status === "PENDING") {
                    return (
                      <div className="flex gap-2 justify-between items-center h-[110px] bg-boxColor text-primary border rounded-md shadow-lg py-5 px-6">
                        <div className="flex flex-col text-sm">
                          <div className="flex gap-[2px] text-[16px]">
                            <span className="font-bold">
                              User: {userStatus.uid}
                            </span>
                            •
                            <span className="font-base">
                              Finished: {val.name}
                            </span>
                          </div>
                          {loading || isPending ? (
                            <div>Loading...</div>
                          ) : (
                            <>
                              <div className="flex gap-[2px] text-[15px] font-bold">
                                <span
                                  onClick={() => {
                                    setModal(false);
                                    setError("");
                                    if (!account) {
                                      setModal(true);
                                      setError(
                                        "You are currently not connected to your Metamask Wallet!"
                                      );
                                      return;
                                    }

                                    const body: UpdateChallengeBody = {
                                      challengeId: val.challengesId,
                                      insuranceId: insuranceId,
                                      newStatus: "FINISHED",
                                      userId: userStatus.uid,
                                    };

                                    const smallerValuePrice =
                                      parseInt(val.tokenPrize) / 1000;
                                    const totalPrice =
                                      smallerValuePrice.toString();

                                    sendTransaction(
                                      {
                                        to: userStatus.walletAddress as `0x${string}`,
                                        value: parseEther(totalPrice),
                                      },
                                      {
                                        async onSuccess() {
                                          await UpdateChallenge(
                                            body,
                                            pendingCb
                                          );
                                        },
                                        onError(err) {
                                          setModal(true);
                                          setError(
                                            (err as BaseError).shortMessage
                                          );
                                        },
                                      }
                                    );
                                  }}
                                  className="hover:underline cursor-pointer"
                                >
                                  Approve
                                </span>
                                •
                                <span
                                  onClick={async () => {
                                    const body: UpdateChallengeBody = {
                                      challengeId: val.challengesId,
                                      insuranceId: insuranceId,
                                      newStatus: "CANCEL",
                                      userId: userStatus.uid,
                                    };

                                    await UpdateChallenge(body, pendingCb);
                                  }}
                                  className="hover:underline cursor-pointer"
                                >
                                  Cancel
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          text={"Something went wrong!"}
          subText={error}
          setModal={setModal}
          mode={"ERROR"}
          onClose={() => setModal(false)}
          onClick={() => setModal(false)}
        />
      )}
    </div>
  );
};

export default InsuranceLandingPage;
