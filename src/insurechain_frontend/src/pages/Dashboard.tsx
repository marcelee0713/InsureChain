import { DASHBOARD_DESC } from "../constants/project.desc";
import { getInsurances } from "../fetchers/insurance.fetchers";
import { PageDesciption } from "../components/page.desc";
import { InsuranceStates } from "../components/dashboard/insurance.states";
import { InsuranceType } from "../interfaces/insurance.interface";
import useSWR from "swr";

const Dashboard = () => {
  const { data, isLoading, error } = useSWR<InsuranceType[]>(
    "/getInsurances",
    getInsurances
  );

  return (
    <div className="main flex-1 overflow-y-auto flex flex-col gap-8 px-12 py-10">
      <PageDesciption pageName="Dashboard" pageDesc={DASHBOARD_DESC.DESC} />
      <InsuranceStates data={data} error={error} loading={isLoading} />
    </div>
  );
};

export default Dashboard;
