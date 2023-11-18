import { Module } from "@nestjs/common";
import { FallenModule } from "./fallen/fallen.module";
import { HardhatModule } from "./hardhat/hardhat.module";
import { HardhatController } from './hardhat/hardhat.controller';

@Module({
    imports: [FallenModule,HardhatModule],
})

export class AppModule {}