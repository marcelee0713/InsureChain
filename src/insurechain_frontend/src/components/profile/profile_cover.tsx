import { ProfileData } from "../../interfaces/user.interface";
import { FaUserCircle, FaCoins } from "react-icons/fa";
import { formatDateFromTimestamp } from "../../utils/formatDate";

export const ProfileCover = (data: ProfileData) => {
  return (
    <div
      style={{ backgroundImage: `url(images/profile-bg.jpg)` }}
      className="h-[400px] bg-cover shadow-lg animate-animfadeAbove"
    >
      <div className="flex-1 h-full flex gap-10 bg-black opacity-70 px-20 py-5 items-center text-white">
        <FaUserCircle size={150} />
        <div className="flex-1 flex flex-col gap-4">
          <div className="font-bold text-2xl">{data.username}</div>
          <div className="flex gap-5 items-center">
            <FaCoins size={50} />
            <span className="text-xl">{`${data.tokens} token(s)`}</span>
          </div>
          <div className="text-sm font-light italic">{`Joined at ${formatDateFromTimestamp(
            data.joinedAt
          )}`}</div>
        </div>
      </div>
    </div>
  );
};
