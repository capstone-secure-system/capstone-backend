import { Module } from '@nestjs/common';
import { HardhatController } from './hardhat.controller';
import { HardhatServiceImpl } from './hardhat.service';
import { SnsService } from 'src/sns/sns.service';
import { CooldownService } from 'src/cooldown/cooldown.service';
import { S3Service } from 'src/s3/s3.service';

@Module({
    controllers: [HardhatController],
    providers: [HardhatServiceImpl,SnsService,S3Service,CooldownService],
})
export class HardhatModule {}
