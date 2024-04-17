export type userType = {
  uid: string;
  username: string;
  email: string;
  password: string;
  token: string;
  createdAt: string;
};

export type userOnDbType = {
  uid: string;
  password: string;
};
