export interface IAuthLogin {
  login: string;
  password: string;
}

export interface IAuthRegistration {
  login: string;
  password: string;
}

export interface IAuthRefresh {
  refreshToken: string;
}

export interface IAuthLogout {
  refreshToken: string;
}
