import { Test } from '@nestjs/testing';
import { EmailController } from '../email.controller';
import { EmailService } from '../email.service';
import { emailCreateStub, emailUpdateStub } from './stubs/email.stub';

describe('EmailController', () => {
    let controller: EmailController;

    const mockEmailService = {
        create: jest.fn(() => {
            return { message: 'Emails add done' };
        }),
        update: jest.fn().mockImplementation(() => {
            return { message: 'Emails update done' };
        }),
    };

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [EmailController],
            providers: [EmailService],
        })
            .overrideProvider(EmailService)
            .useValue(mockEmailService)
            .compile();

        controller = module.get<EmailController>(EmailController);
    });

    it('should be different', () => {
        expect(controller).toBeDefined();
    });

    it('should create email', async () => {
        const dto = { emails: [emailCreateStub()] };

        expect(await controller.create(dto)).toEqual({
            message: 'Emails add done',
        });

        expect(mockEmailService.create).toHaveBeenCalledWith(dto.emails);
    });

    it('should update email', async () => {
        const dto = { emails: [emailUpdateStub()] };

        expect(await controller.update(dto)).toEqual({
            message: 'Emails update done',
        });

        expect(mockEmailService.update).toHaveBeenCalledWith(dto.emails);
    });
});
