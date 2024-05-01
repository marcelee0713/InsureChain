import { Link } from "react-router-dom";
import { ChallengesType } from "../../interfaces/insurance.interface";

interface props {
  insuranceId: string;
  image: string;
  name: string;
  desc: string;
  challenges: ChallengesType[];
}

export const InsuranceBox = ({
  image,
  insuranceId,
  name,
  desc,
  challenges,
}: props) => {
  const uid = localStorage.getItem("uid");
  let availableChallenges = 0;

  challenges.forEach((i) => {
    let present = false;
    i.userStatus.forEach((user) => {
      if (user.uid === uid) {
        present = true;
      }
    });

    if (!present) {
      availableChallenges = availableChallenges + 1;
    }
  });

  return (
    <Link
      to={`/home/insurance/${insuranceId}`}
      style={{ backgroundImage: `url(${image})` }}
      className={`flex flex-col cursor-pointer bg-cover rounded-lg h-[400px] group shadow-lg`}
    >
      <div className="flex-1 flex flex-col bg-black opacity-50 rounded-t-lg items-center justify-center">
        <h1 className="font-bold text-xl opacity-0 duration-300 transition-opacity text-primary group-hover:opacity-100">
          View more
        </h1>
      </div>
      <div
        className="h-[150px] flex flex-col gap-2 text-primary bg-black rounded-b-lg py-2 px-4
       opacity-50 duration-700 transition-all group-hover:bg-boxColor group-hover:opacity-100"
      >
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="text-sm">{desc}</p>
        </div>
        {availableChallenges === 0 ? (
          <div className="text-sm font-light">
            There are currently no challenges available for you in this
            insurance company.
          </div>
        ) : (
          <div className="text-sm font-light flex flex-col gap-2">
            <div>
              {"Available Challenge(s): "} {availableChallenges}{" "}
            </div>
            <span className="group-hover:underline">Start them now!</span>
          </div>
        )}
      </div>
    </Link>
  );
};
