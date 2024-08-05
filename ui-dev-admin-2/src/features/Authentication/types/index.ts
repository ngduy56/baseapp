export interface LoginRequest {
  userNameOrEmailAddress: string;
  password: string;
  rememberClients: boolean;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  avatarPath: string;
}

export interface LoginState {
  accessToken: string | null;
  user: User;
  isError: boolean;
  errorMessage: string;
}
