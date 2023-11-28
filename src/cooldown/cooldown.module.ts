import { Module } from '@nestjs/common';
import { CooldownService } from './cooldown.service';

@Module({
    providers: [CooldownService]
})
export class CooldownModule {}
