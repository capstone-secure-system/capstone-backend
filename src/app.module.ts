import { Module } from "@nestjs/common";
import { FallenModule } from "./fallen/fallen.module";
import { HardhatModule } from "./hardhat/hardhat.module";
import { SnsModule } from './sns/sns.module';
import { CooldownModule } from './cooldown/cooldown.module';
import { S3Module } from './s3/s3.module';
import { DynamodbModule } from './dynamodb/dynamodb.module';

@Module({
    imports: [FallenModule,HardhatModule, SnsModule, CooldownModule, S3Module, DynamodbModule]
})

export class AppModule {}