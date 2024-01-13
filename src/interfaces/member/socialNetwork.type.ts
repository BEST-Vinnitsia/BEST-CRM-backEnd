export interface ISocialNetwork {
  id: string;
  memberId: string;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get by id
export interface ISocialNetworkGetById extends Pick<ISocialNetwork, 'id'> {}

/* ----------------  POST  ---------------- */
export interface ISocialNetworkCreate extends Omit<ISocialNetwork, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ISocialNetworkUpdate extends Omit<ISocialNetwork, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ISocialNetworkDelete extends Pick<ISocialNetwork, 'id'> {}
