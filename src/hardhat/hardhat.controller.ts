import { Controller,Get,Post,Body,UseGuards } from '@nestjs/common';
import { HardhatRequestDto } from './dto/HardhatRequestDto';
import { HardhatResponseDto } from './dto/HardhatResponseDto';
import { HardhatService } from './interface/HardhatService';
import { HardhatServiceImpl } from './hardhat.service';
import { Cooldown } from 'src/cooldown/cooldown.decorator';
import { CooldownGuard } from 'src/cooldown/cooldown.guard';

@Controller('/hardhat')
export class HardhatController {
    constructor(private hardhatService: HardhatServiceImpl) {}

    @Post('/detect')
    @Cooldown("/hardhat/detect",10)
    @UseGuards(CooldownGuard)
    async createSignal(@Body() dto: HardhatRequestDto): Promise<HardhatResponseDto> {
        return this.hardhatService.createSignal(dto);
    }
}
