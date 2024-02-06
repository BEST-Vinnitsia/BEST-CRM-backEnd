export interface ISocialNetwork {
    id: string;
    memberId: string;
    name: string;
    url: string;
    isMain: boolean;

    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface ISocialNetworkListByMemberId extends Pick<ISocialNetwork, 'memberId'> {}

export interface ISocialNetworkMainByMemberId extends Pick<ISocialNetwork, 'memberId'> {}

export interface ISocialNetworkCreate extends Omit<ISocialNetwork, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ISocialNetworkUpdate extends Omit<ISocialNetwork, 'createdAt' | 'updatedAt'> {}

export interface ISocialNetworkDelete extends Pick<ISocialNetwork, 'id'> {}
