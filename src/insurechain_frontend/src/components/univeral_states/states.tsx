import { AuthLoading } from "../auth/loading";
import { TbMoodEmptyFilled } from "react-icons/tb";

interface props {
  text?: string;
}

export const Loading = ({ text }: props) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center ">
      <AuthLoading />
      <div className="text-sm">{text ? text : `Fetching data...`}</div>
    </div>
  );
};

export const Error = ({ text }: props) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center ">
      <img src="/images/error.png" className="w-[150px] h-[150px]" />

      <div className="text-sm">
        {text ? text : `Something went wrong! Please try again later!`}
      </div>
    </div>
  );
};

export const OnEmpty = ({ text }: props) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center ">
      <TbMoodEmptyFilled size={150} />

      <div className="text-sm">{text ? text : `This is empty...`}</div>
    </div>
  );
};
