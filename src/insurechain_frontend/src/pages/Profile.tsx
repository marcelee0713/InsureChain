import useSWR from "swr";
import { getUserProfileData } from "../api/fetchers/user.fetcher";
import { ProfileData } from "../interfaces/user.interface";
import { Error, Loading } from "../components/univeral_states/states";
import { ProfileCover } from "../components/profile/profile_cover";
import { ProfileStats } from "../components/profile/profile_stats";

const Profile = () => {
  const { data, isLoading, error } = useSWR<ProfileData>(
    "/getUserProfileData",
    getUserProfileData
  );

  if (isLoading) return <Loading />;

  if (!data || error) return <Error />;

  return (
    <div className="main flex-1 overflow-y-auto flex flex-col gap-8">
      <ProfileCover {...data} />
      <ProfileStats {...data} />
    </div>
  );
};

export default Profile;
