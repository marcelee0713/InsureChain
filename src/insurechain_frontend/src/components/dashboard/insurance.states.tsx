import { InsuranceType } from "../../interfaces/insurance.interface";
import { Loading, Error, OnEmpty } from "../univeral_states/states";
import { InsuranceBox } from "./insurance.box";

interface props {
  data: InsuranceType[] | undefined;
  loading: boolean;
  error: any;
}

export const InsuranceStates = ({ data, loading, error }: props) => {
  if (loading) {
    return <Loading text="Getting your available challenges." />;
  }

  if (error || !data) {
    return <Error />;
  }

  if (data.length === 0) {
    return <OnEmpty />;
  }

  console.log(`https://${window.location.hostname}`);

  return (
    <div className="flex-1 grid grid-cols-myGridTemplate gap-5">
      {data.map((val) => (
        <InsuranceBox
          name={val.name}
          insuranceId={val.insuranceId}
          desc={val.description}
          image={val.image}
          challenges={val.challenges}
          key={val.insuranceId}
        />
      ))}
    </div>
  );
};
