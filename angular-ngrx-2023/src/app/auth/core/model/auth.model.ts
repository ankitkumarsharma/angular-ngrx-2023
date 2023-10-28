export interface UserModel {
  username: string;
  email: string;
}
export interface LoginRequestModel {
  email: string;
  password: string;
}

export interface LoginResponseModel {
  success: number;
  data: LoginDataResponseModel;
}

export interface LoginDataResponseModel {
  user: UserModel,
  token: string | null;
  isAuth: boolean;
  loginError?: string;
}
