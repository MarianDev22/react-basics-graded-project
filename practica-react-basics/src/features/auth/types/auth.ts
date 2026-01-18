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
};

// export interface AuthResponse {
//     accessToken: string;
// }