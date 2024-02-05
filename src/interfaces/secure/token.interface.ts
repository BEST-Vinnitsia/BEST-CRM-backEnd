export interface IAccessToken extends ITokenPayload {
  exp: number;
  iat: number;
  aud: string;
  iss: string;
}
export interface IRefreshToken extends ITokenPayload {
  exp: number;
  iat: number;
  aud: string;
  iss: string;
}

export interface ITokenPayload {
  refreshTokenId: string;
  memberId: string;
  fullName: string;
  surname: string;
  membershipName: string;
  claims: string[];
}
