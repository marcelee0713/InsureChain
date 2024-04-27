import { insurechain_backend } from "../../../../declarations/insurechain_backend";
import { ProfileData, User } from "../../interfaces/user.interface";
import { catchErrors } from "../../utils/error.catcher";

const getUser = async (key: string): Promise<User> => {
  const uid = localStorage.getItem("uid");

  try {
    if (!uid) throw new Error("Not logged in");
    const res = await insurechain_backend.getUser({ userId: uid });

    const user: User = JSON.parse(res);

    return user;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(catchErrors(err));
    }

    throw new Error("Internal server error");
  }
};

const getUserProfileData = async (key: string): Promise<ProfileData> => {
  const uid = localStorage.getItem("uid");

  try {
    if (!uid) throw new Error("Not logged in");
    const res = await insurechain_backend.getUserProfileData({ userId: uid });

    const data: ProfileData = JSON.parse(res);

    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(catchErrors(err));
    }

    throw new Error("Internal server error");
  }
};

export { getUser, getUserProfileData };
