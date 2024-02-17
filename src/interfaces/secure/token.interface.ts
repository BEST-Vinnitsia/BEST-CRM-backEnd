export interface ITokenPayload {
  refreshTokenId: number;
  memberId: number;
  name: string;
  surname: string;
  membershipName: string;
  claims: string[];
}

/* ----------------  extends  ---------------- */

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

