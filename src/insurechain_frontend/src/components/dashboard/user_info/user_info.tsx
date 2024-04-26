import useSWR from "swr";
import { PageDesciption } from "../../page.desc";
import { Error, Loading } from "../../univeral_states/states";
import { User } from "../../../interfaces/user.interface";
import { getUser } from "../../../api/fetchers/user.fetcher";
import { UserInfoContainer } from "./user_info.container";

export const UserInfo = () => {
  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useSWR<User>("/getUserInfo", getUser);

  if (userLoading) return <Loading text="Fetching user data" />;

  if (userError || !userData) return <Error text="Error on getting user" />;

  return (
    <div className="flex flex-col gap-5">
      <PageDesciption pageName={`Welcome, ${userData.username}`} />
      <UserInfoContainer userData={userData} />
    </div>
  );
};
