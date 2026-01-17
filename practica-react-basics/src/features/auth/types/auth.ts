export type RegisterDTO = {
  username: string;
  password: string;
  //email: string;  
};

export type LoginDTO = {
  username: string;
  password: string;
  rememberMe?: boolean;
};

export interface AuthResponse {
    accessToken: string;
}