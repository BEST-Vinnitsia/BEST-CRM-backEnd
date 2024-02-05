import { randomUUID } from 'crypto';
import { IEmail, IEmailCreate, IEmailUpdate } from '../../../../interfaces/member/email.type';

export const emailStub = (): IEmail => {
    return {
        id: randomUUID(),
        memberId: randomUUID(),
        email: 'test@test.com',
        isMain: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
};

export const emailCreateStub = (): IEmailCreate => {
    return {
        memberId: randomUUID(),
        email: 'test@test.com',
        isMain: false,
    };
};

export const emailUpdateStub = (): IEmailUpdate => {
    return {
        id: randomUUID(),
        memberId: randomUUID(),
        email: 'test@test.com',
        isMain: false,
    };
};
