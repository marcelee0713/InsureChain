import useSWR from "swr";
import { PageDesciption } from "../../page.desc";
import { Error, Loading } from "../../univeral_states/states";
import { User } from "../../../interfaces/user.interface";
import { getUser } from "../../../api/fetchers/user.fetcher";
import { UserInfoContainer } from "./user_info.container";
import { type BaseError, useSendTransaction } from "wagmi";
import { parseEther } from "viem";

export const UserInfo = () => {
  const {
    data: hash,
    isPending,
    sendTransaction,
    error,
  } = useSendTransaction();

  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useSWR<User>("/getUserInfo", getUser);

  if (userLoading) return <Loading text="Fetching user data" />;

  if (userError || !userData) return <Error text="Error on getting user" />;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <PageDesciption pageName={`Welcome, ${userData.username}`} />
        <div className="animate-animfadeLeftSide">
          <w3m-button />
        </div>
      </div>
      <UserInfoContainer userData={userData} />
    </div>
  );
};
