export type RegisterDTO = {
  username: string;
  password: string;
  confirmPassword: string,
  email: string;  
  name: string;
  surname: string
};

export type LoginDTO = {
  username: string;
  password: string;
  rememberMe?: boolean;
};

export interface AuthResponse {
    accessToken: string;
}