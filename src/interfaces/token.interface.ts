export interface IAccessToken extends IAccessTokenPayload {
  exp: number;
  iat: number;
  aud: string;
  iss: string;
}
export interface IRefreshToken extends IRefreshTokenPayload {
  exp: number;
  iat: number;
  aud: string;
  iss: string;
}

export interface IAccessTokenPayload {
  refreshTokenId: string;
  fullName: string;
  surname: string;
  membershipName: string;
  permission: {
    membership: string[];
    board: string[];
    coordinator: string[];
  };
}

export interface IRefreshTokenPayload {
  refreshTokenId: string;
  memberId: string;
}
