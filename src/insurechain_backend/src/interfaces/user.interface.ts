export interface userType {
  uid: string;
  username: string;
  email: string;
  password: string;
  token: string;
  createdAt: string;
}

export interface userOnDbType {
  uid: string;
  password: string;
}
