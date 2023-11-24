import { Module } from '@nestjs/common';
import { HardhatController } from './hardhat.controller';
import { HardhatServiceImpl } from './hardhat.service';
import { SnsService } from 'src/sns/sns.service';

@Module({
    controllers: [HardhatController],
    providers: [HardhatServiceImpl,SnsService],
})
export class HardhatModule {}
