import { randomUUID } from 'crypto';
import { IMember, IMemberCreate, IMemberGetIdRes, IMemberUpdate } from '../../../../interfaces/member/member.type';
import { ClothingSizeEnum, MembershipEnum } from '../../../../constants/enums.constant';

export const memberStub = (): IMember => {
    return {
        id: randomUUID(),
        login: 'login@email.com',
        password: '',
        membership: MembershipEnum.FULL,
        bestEmail: 'name.surname@best-eu.org',
        middleName: 'Name',
        surname: 'Name',
        fullName: 'Name',
        faculty: 'ФМІБ',
        group: 'УБ-21б',
        homeAddress: null,
        clothingSize: ClothingSizeEnum.L,
        birthday: new Date(),

        createdAt: new Date(),
        updatedAt: new Date(),
    };
};

export const memberCreateStub = (): IMemberCreate => {
    return {
        login: 'login@email.com',
        password: '',
        membership: MembershipEnum.FULL,
        bestEmail: 'name.surname@best-eu.org',
        middleName: 'Name',
        surname: 'Name',
        fullName: 'Name',
        faculty: 'ФМІБ',
        group: 'УБ-21б',
        homeAddress: null,
        clothingSize: ClothingSizeEnum.L,
        birthday: new Date(),
    };
};

export const memberUpdateStub = (): IMemberUpdate => {
    return {
        id: randomUUID(),
        login: 'login@email.com',
        password: '',
        membership: MembershipEnum.FULL,
        bestEmail: 'name.surname@best-eu.org',
        middleName: 'Name',
        surname: 'Name',
        fullName: 'Name',
        faculty: 'ФМІБ',
        group: 'УБ-21б',
        homeAddress: null,
        clothingSize: ClothingSizeEnum.L,
        birthday: new Date(),
    };
};

export const memberDetailsStub = (): IMemberGetIdRes => {
    return {
        id: randomUUID(),
        login: 'login@email.com',
        password: '',
        membership: MembershipEnum.FULL,
        bestEmail: 'name.surname@best-eu.org',
        middleName: 'Name',
        surname: 'Name',
        fullName: 'Name',
        faculty: 'ФМІБ',
        group: 'УБ-21б',
        homeAddress: null,
        clothingSize: ClothingSizeEnum.L,
        birthday: new Date(),
        email: [],
        phone: [],
        socialNetwork: [],

        createdAt: new Date(),
        updatedAt: new Date(),
    };
};

export const memberDeleteArrayStub = () => {
    return {
        count: 1,
    };
};
