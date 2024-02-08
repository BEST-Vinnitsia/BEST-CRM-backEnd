import { Test, TestingModule } from '@nestjs/testing';
import { MemberService } from '../member.service';
import { PrismaService } from '../../prisma/prisma.service';
import { memberStub } from './stubs/member.stub';

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

const memberArray = [memberStub(), memberStub(), memberStub()];
const oneMember = memberArray[0];

const db = {
    member: {
        findMany: jest.fn().mockResolvedValue(memberArray),
        findUnique: jest.fn().mockResolvedValue(oneMember),
        findFirst: jest.fn().mockResolvedValue(oneMember),
        create: jest.fn().mockReturnValue(oneMember),
        save: jest.fn(),
        update: jest.fn().mockResolvedValue(oneMember),
        delete: jest.fn().mockResolvedValue(oneMember),
    },
};

describe('MemberService', () => {
    let service: MemberService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MemberService,
                {
                    provide: PrismaService,
                    useValue: db,
                },
            ],
        }).compile();

        service = module.get<MemberService>(MemberService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('should be different', () => {
        expect(service).toBeDefined();
    });

    describe('getList', () => {
        it('should return an array of cats', async () => {
            const dto = memberArray;

            const emails = await service.getList();
            expect(emails).toEqual(dto);
        });
    });
});
