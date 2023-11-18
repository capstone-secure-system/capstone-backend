import { Module } from '@nestjs/common';
import { FallenController } from './fallen.controller';
import { FallenServiceImpl } from './fallen.service';

@Module({
    controllers: [FallenController],
    providers: [FallenServiceImpl],
})
export class FallenModule {}
