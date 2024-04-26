import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getInsurance } from "../api/fetchers/insurance.fetchers";
import { Error } from "../components/univeral_states/states";
import {
  ChallengesType,
  InsuranceType,
} from "../interfaces/insurance.interface";
import { getChallengesFromInsurance } from "../api/fetchers/challenges.fetchers";
import { InsuranceInfo } from "../components/insurance/insurance_info";

const InsurancePage = () => {
  let { id } = useParams();

  const uid = localStorage.getItem("uid");

  if (!id || !uid) return <Error text="No Insurance or User ID provided!" />;

  const {
    data: insuranceData,
    isLoading: iLoading,
    error: iError,
  } = useSWR<InsuranceType>(`${id}:${uid}/insurance`, getInsurance);

  const challengesKey = `${id}:${uid}/challenges`;

  const {
    data: challengesData,
    isLoading: cLoading,
    error: cError,
  } = useSWR<ChallengesType[]>(challengesKey, getChallengesFromInsurance);

  return (
    <div className="flex-1 overflow-y-auto flex flex-col gap-8">
      <InsuranceInfo
        data={insuranceData}
        error={iError}
        isLoading={iLoading}
        dataChallenges={challengesData}
        errorChallenges={cError}
        loadingChallenges={cLoading}
        uid={uid}
        challengeKey={challengesKey}
      />
    </div>
  );
};

export default InsurancePage;
