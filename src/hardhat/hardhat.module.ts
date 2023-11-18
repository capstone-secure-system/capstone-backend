import { Module } from '@nestjs/common';
import { HardhatController } from './hardhat.controller';
import { HardhatServiceImpl } from './hardhat.service';

@Module({
    controllers: [HardhatController],
    providers: [HardhatServiceImpl],
})
export class HardhatModule {}
