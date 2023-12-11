import { Module } from '@nestjs/common';
import { FallenController } from './fallen.controller';
import { FallenServiceImpl } from './fallen.service';
import { SnsService } from 'src/sns/sns.service';
import { CooldownService } from 'src/cooldown/cooldown.service';
import { S3Service } from 'src/s3/s3.service';
import { DynamodbService } from 'src/dynamodb/dynamodb.service';

@Module({
    controllers: [FallenController],
    providers: [FallenServiceImpl,SnsService,S3Service,CooldownService,DynamodbService],
})
export class FallenModule {}
