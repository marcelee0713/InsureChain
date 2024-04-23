interface props {
  insuranceId: string;
  image: string;
  name: string;
  desc: string;
  onClick: () => void;
  challenges: ChallengesType[];
}

export const InsuranceBox = ({
  image,
  insuranceId,
  name,
  desc,
  challenges,
  onClick,
}: props) => {
  const uid = localStorage.getItem("uid");
  let availableChallenges = 0;

  challenges.forEach((i) => {
    let present = false;
    i.claimedUsers.forEach((user) => {
      if (user === uid) {
        present = true;
      }
    });

    if (!present) {
      availableChallenges = availableChallenges + 1;
    }
  });

  return (
    <div
      onClick={onClick}
      style={{ backgroundImage: `url(${image})` }}
      className={`flex flex-col cursor-pointer bg-cover rounded-lg h-[400px] group shadow-lg animate-animfadeLeftSide`}
    >
      <div className="flex-1 flex flex-col bg-black opacity-50 rounded-t-lg items-center justify-center">
        <h1 className="font-bold text-xl opacity-0 duration-300 transition-opacity text-white group-hover:opacity-100">
          View more
        </h1>
      </div>
      <div
        className="h-[150px] flex flex-col gap-2 text-white bg-black rounded-b-lg py-2 px-4 border-x border-b
       border-accent opacity-50 duration-700 transition-all group-hover:bg-white group-hover:opacity-100 group-hover:text-black"
      >
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="text-sm">{desc}</p>
        </div>
        {availableChallenges === 0 ? (
          <div className="text-sm font-light">
            There is currenly no challenges available for you in this insurance
            company.
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
    </div>
  );
};
