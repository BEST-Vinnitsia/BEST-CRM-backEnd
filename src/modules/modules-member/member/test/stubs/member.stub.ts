import { randomUUID } from 'crypto';
import { IMember, IMemberCreate, IMemberGetIdRes, IMemberUpdate } from '../../../../../interfaces/member/member.type';
import { ClothingSizeEnum, MembershipEnum } from '../../../../../constants/enums.constant';

const passwordHash = '$2b$10$EOXpLQwXnm8aBFWLkDjxue9bymqrIANRYuIc/EbvD0OS5UCEEwtb2'; // P@ssword1234
const birthdayMock = new Date('1900-01-01T00:00:00.000Z');

export const memberStub = (): IMember => {
    return {
        id: randomUUID(),
        login: 'login@email.com',
        password: passwordHash,
        membership: MembershipEnum.FULL,
        bestEmail: 'name.surname@best-eu.org',
        name: 'Name',
        surname: 'Name',
        middleName: 'Name',
        faculty: 'ФМІБ',
        group: 'УБ-21б',
        homeAddress: null,
        clothingSize: ClothingSizeEnum.L,
        birthday: birthdayMock,

        createdAt: new Date(),
        updatedAt: new Date(),
    };
};

export const memberCreateStub = (): IMemberCreate => {
    return {
        login: 'login@email.com',
        password: passwordHash,
        membership: MembershipEnum.FULL,
        bestEmail: 'name.surname@best-eu.org',
        name: 'Name',
        surname: 'Name',
        middleName: 'Name',
        faculty: 'ФМІБ',
        group: 'УБ-21б',
        homeAddress: null,
        clothingSize: ClothingSizeEnum.L,
        birthday: birthdayMock,
    };
};

export const memberUpdateStub = (): IMemberUpdate => {
    return {
        id: randomUUID(),
        membership: MembershipEnum.FULL,
        bestEmail: 'name.surname@best-eu.org',
        middleName: 'Name',
        surname: 'Name',
        name: 'Name',
        faculty: 'ФМІБ',
        group: 'УБ-21б',
        homeAddress: null,
        clothingSize: ClothingSizeEnum.L,
        birthday: birthdayMock,
    };
};

export const memberDetailsStub = (): IMemberGetIdRes => {
    return {
        id: randomUUID(),
        login: 'login@email.com',
        password: passwordHash,
        membership: MembershipEnum.FULL,
        bestEmail: 'name.surname@best-eu.org',
        name: 'Name',
        surname: 'Name',
        middleName: 'Name',
        faculty: 'ФМІБ',
        group: 'УБ-21б',
        homeAddress: null,
        clothingSize: ClothingSizeEnum.L,
        birthday: birthdayMock,

        createdAt: new Date(),
        updatedAt: new Date(),
    };
};

export const memberDeleteArrayStub = () => {
    return {
        count: 1,
    };
};
