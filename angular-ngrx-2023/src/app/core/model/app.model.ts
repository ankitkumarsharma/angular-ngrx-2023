import { UserModel } from "src/app/auth/core/model/auth.model";

export interface State {
  token: string | null;
  user: UserModel | null;
  isAuth: boolean;
  loginError?: string;
}
