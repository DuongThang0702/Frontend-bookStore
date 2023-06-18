export interface IUser {
  email: string;
  password: string;
}
export interface Register extends IUser {
  firstName: string;
  lastName: string;
}

export interface ForgotPassword {
  email: string;
}

export interface ResetPassword {
  password: string;
}

export interface UserData {
  _id: string;
  email: string;
  lastName: string;
  firstName: string;
  role: string;
  avatar: string | null;
  mobile: string | null;
  refreshToken: string;
  address: {};
  cart: [];
  createdAt: string;
  updatedAt: string;
}
