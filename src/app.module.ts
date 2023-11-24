import { Module } from "@nestjs/common";
import { FallenModule } from "./fallen/fallen.module";
import { HardhatModule } from "./hardhat/hardhat.module";
import { SnsModule } from './sns/sns.module';

@Module({
    imports: [FallenModule,HardhatModule, SnsModule],
})

export class AppModule {}