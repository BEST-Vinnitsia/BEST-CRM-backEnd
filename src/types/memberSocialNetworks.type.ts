export interface IMemberSocialNetworks {
  id: string;
  member_id: string;
  name: string;
  url: string;
  create_date: Date;
}

// create
export interface IMemberSocialNetworksCreate extends Omit<IMemberSocialNetworks, 'id' | 'create_date'> {}
export interface IMemberSocialNetworksCreateRes extends IMemberSocialNetworks {}
export interface IMemberSocialNetworksDbCreate extends Omit<IMemberSocialNetworks, 'id' | 'create_date'> {}
export interface IMemberSocialNetworksDbCreateRes extends IMemberSocialNetworks {}

// get list by member id
export interface IMemberSocialNetworksGetListByMemberId extends Pick<IMemberSocialNetworks, 'member_id'> {}
export interface IMemberSocialNetworksGetListByMemberIdRes extends IMemberSocialNetworks {}
export interface IMemberSocialNetworksDbGetListByMemberId extends Pick<IMemberSocialNetworks, 'member_id'> {}
export interface IMemberSocialNetworksDbGetListByMemberIdRes extends IMemberSocialNetworks {}
