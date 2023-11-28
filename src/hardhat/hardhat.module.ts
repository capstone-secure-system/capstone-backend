import { Module } from '@nestjs/common';
import { HardhatController } from './hardhat.controller';
import { HardhatServiceImpl } from './hardhat.service';
import { SnsService } from 'src/sns/sns.service';
import { CooldownService } from 'src/cooldown/cooldown.service';

@Module({
    controllers: [HardhatController],
    providers: [HardhatServiceImpl,SnsService,CooldownService],
})
export class HardhatModule {}
