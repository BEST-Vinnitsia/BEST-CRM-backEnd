import { Test } from '@nestjs/testing';
import { MemberController } from '../member.controller';
import { MemberService } from '../member.service';
import { memberCreateStub, memberDeleteArrayStub, memberDetailsStub, memberStub, memberUpdateStub } from './stubs/member.stub';

const memberArray = [memberStub(), memberStub(), memberStub()];
const memberDetails = memberDetailsStub();
const oneMember = memberArray[0];
const memberDeleteArray = memberDeleteArrayStub();

describe('MemberController', () => {
    let controller: MemberController;

    const mockService = {
        getList: jest.fn().mockImplementation(() => memberArray),
        getById: jest.fn().mockImplementation(() => memberDetails),
        create: jest.fn().mockImplementation(() => oneMember),
        update: jest.fn().mockImplementation(() => oneMember),
        deleteArray: jest.fn().mockImplementation(() => memberDeleteArray),
    };

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [MemberController],
            providers: [MemberService],
        })
            .overrideProvider(MemberService)
            .useValue(mockService)
            .compile();

        controller = module.get<MemberController>(MemberController);
    });

    it('should be different', () => {
        expect(controller).toBeDefined();
    });

    it('should create member', async () => {
        const dto = memberCreateStub();

        expect(await controller.create(dto)).toEqual(oneMember);

        expect(mockService.create).toHaveBeenCalledWith(dto);
    });

    it('should update member', async () => {
        const dto = memberUpdateStub();

        expect(await controller.update(dto)).toEqual(oneMember);

        expect(mockService.update).toHaveBeenCalledWith(dto);
    });
});
