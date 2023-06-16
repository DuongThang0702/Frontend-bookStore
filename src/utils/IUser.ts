export interface IUser {
  email: string;
  password: string;
}
export interface Register extends IUser {
  firstName: string;
  lastName: string;
}
