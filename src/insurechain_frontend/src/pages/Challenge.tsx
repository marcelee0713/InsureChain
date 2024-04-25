import useSWR from "swr";
import { PageDesciption } from "../components/page.desc";
import { CHALLENGES_DESC } from "../constants/project.desc";
import { getChallenges } from "../api/fetchers/challenges.fetchers";
import { ChallengesType } from "../interfaces/insurance.interface";
import { ChallengesStates } from "../components/challenges/challenge.states";
import { Error } from "../components/univeral_states/states";

const Challenge = () => {
  const { data, isLoading, error } = useSWR<ChallengesType[]>(
    "/getAvailableChallenges",
    getChallenges
  );

  const uid = localStorage.getItem("uid");

  if (!uid) return <Error />;

  return (
    <div className="main flex-1 overflow-y-auto flex flex-col gap-8 px-12 py-10">
      <PageDesciption pageName="Challenges" pageDesc={CHALLENGES_DESC.DESC} />
      <ChallengesStates
        data={data}
        error={error}
        loading={isLoading}
        uid={uid}
      />
    </div>
  );
};

export default Challenge;
