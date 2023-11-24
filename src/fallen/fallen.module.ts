import { Module } from '@nestjs/common';
import { FallenController } from './fallen.controller';
import { FallenServiceImpl } from './fallen.service';
import { SnsService } from 'src/sns/sns.service';

@Module({
    controllers: [FallenController],
    providers: [FallenServiceImpl,SnsService],
})
export class FallenModule {}
