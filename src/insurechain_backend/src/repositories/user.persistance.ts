import { userType } from "../interfaces/user.interface";

const getUser = async (uid: string, useDb: userType[]): Promise<userType> => {
  try {
    let user: userType | undefined = undefined;

    for (let i = 0; i < useDb.length; i++) {
      if (uid === useDb[i].uid) {
        user = useDb[i];
        break;
      }
    }

    if (!user) throw new Error("The following user can not be found!");

    return user;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }

    throw new Error("Internal server error!");
  }
};

export { getUser };
