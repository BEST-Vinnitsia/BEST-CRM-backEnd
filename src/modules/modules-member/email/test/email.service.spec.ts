import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from '../email.service';
import { PrismaService } from '../../prisma/prisma.service';
import { emailStub } from './stubs/email.stub';

jest.mock('@prisma/client', () => {
    const mockPostFindMany = jest.fn().mockResolvedValue([]); // how do I access this in my test suites?
    return {
        PrismaClient: jest.fn().mockImplementation(() => {
            return {
                post: {
                    findMany: mockPostFindMany,
                },
            };
        }),
    };
});

const emailArray = [emailStub(), emailStub(), emailStub()];
const oneEmail = emailArray[0];

const db = {
    memberEmail: {
        findMany: jest.fn().mockResolvedValue(emailArray),
        findUnique: jest.fn().mockResolvedValue(oneEmail),
        findFirst: jest.fn().mockResolvedValue(oneEmail),
        create: jest.fn().mockReturnValue(oneEmail),
        save: jest.fn(),
        update: jest.fn().mockResolvedValue(oneEmail),
        delete: jest.fn().mockResolvedValue(oneEmail),
    },
};

describe('EmailService', () => {
    let service: EmailService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                EmailService,
                {
                    provide: PrismaService,
                    useValue: db,
                },
            ],
        }).compile();

        service = module.get<EmailService>(EmailService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('should be different', () => {
        expect(service).toBeDefined();
    });

    describe('getAll', () => {
        it('should return an array of cats', async () => {
            const dto = emailArray[0];

            const emails = await service.getListByMemberId({ memberId: dto.memberId });
            expect(emails).toEqual(emailArray);
        });
    });
});
