import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const ParseJsonBody = createParamDecorator(
  async (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const body = request.body;

    const dto = plainToInstance(data.dtoClass, body);

    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new Error('Validation failed');
    }

    return dto;
  }
);
