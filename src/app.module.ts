import { Module } from "@nestjs/common";
import { FallenModule } from "./fallen/fallen.module";
import { HardhatModule } from "./hardhat/hardhat.module";
import { SnsModule } from './sns/sns.module';
import { CooldownModule } from './cooldown/cooldown.module';

@Module({
    imports: [FallenModule,HardhatModule, SnsModule, CooldownModule]
})

export class AppModule {}