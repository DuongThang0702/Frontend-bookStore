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

export interface UserCurrent extends ForgotPassword, Register {
  _id: string;
  avatar: string | null;
  mobile: string | null;
  address: {};
  cart: [];
  createdAt: string;
  role?: string;
  isBlocked?: string;
  updatedAt: string;
}

export interface UserData extends UserCurrent, ForgotPassword {
  refreshToken: string;
  email: string;
}
