import { Reflector } from '@nestjs/core';

export const Claim = Reflector.createDecorator<string[]>();
