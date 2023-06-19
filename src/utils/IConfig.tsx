export interface IResponseUser {
  error: boolean;
  mes: string;
}

export interface LocalStorage {
  isLoggedIn: boolean;
  access_token: string;
}
