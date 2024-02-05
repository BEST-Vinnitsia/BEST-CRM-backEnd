export interface IAuthLogin {
  email: string;
  password: string;
}

export interface IAuthRegistration {
  email: string;
  password: string;
}

export interface IAuthRefresh {
  refreshToken: string;
}

export interface IAuthLogout {
  refreshToken: string;
}
