import { AuthLoading } from "../auth/loading";
import { InsuranceBox } from "./insurance.box";
import { TbMoodEmptyFilled } from "react-icons/tb";

interface props {
  data: InsuranceType[] | undefined;
  loading: boolean;
  error: any;
}

export const InsuranceStates = ({ data, loading, error }: props) => {
  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center ">
        <AuthLoading />
        <div className="text-sm">Fetching data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <img src="/images/error.png" className="w-[150px] h-[150px]" />
        <div className="text-sm">
          Something went wrong! Please try again later!
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <img src="/images/error.png" className="w-[150px] h-[150px]" />
        <div className="text-sm">
          Something went wrong! Please try again later!
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <TbMoodEmptyFilled size={150} />
        <div className="text-sm">
          There are no insurance companies currently here...
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-myGridTemplate gap-5">
      {data.map((val) => (
        <InsuranceBox
          name={val.name}
          insuranceId={val.insuranceId}
          desc={val.description}
          image={val.image}
          challenges={val.challenges}
          onClick={() => {}}
          key={val.insuranceId}
        />
      ))}
    </div>
  );
};
