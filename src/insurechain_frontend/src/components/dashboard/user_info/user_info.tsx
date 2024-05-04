import useSWR from "swr";
import { PageDesciption } from "../../page.desc";
import { Error, Loading } from "../../univeral_states/states";
import { User } from "../../../interfaces/user.interface";
import { getUser } from "../../../api/fetchers/user.fetcher";
import { UserInfoContainer } from "./user_info.container";
import { useAccount } from "wagmi";

export const UserInfo = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useSWR<User>("/getUserInfo", getUser);

  if (userLoading) return <Loading text="Fetching user data" />;

  if (userError || !userData) return <Error text="Error on getting user" />;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <PageDesciption pageName={`Welcome, ${userData.username}`} />
          <div className="animate-animfadeLeftSide">
            <w3m-button label="Connect Metamask" />
          </div>
        </div>
        {isDisconnected && (
          <div className="text-sm animate-animfadeLeftSide">
            Don't have Metamask?{" "}
            <a
              className="font-bold hover:underline"
              href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            >
              Click here!
            </a>
          </div>
        )}
      </div>

      <UserInfoContainer userData={userData} />
    </div>
  );
};
