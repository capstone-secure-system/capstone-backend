import { Controller,Get,Post,Body } from '@nestjs/common';
import { HardhatRequestDto } from './dto/HardhatRequestDto';
import { HardhatResponseDto } from './dto/HardhatResponseDto';
import { HardhatService } from './interface/HardhatService';
import { HardhatServiceImpl } from './hardhat.service';

@Controller('/hardhat')
export class HardhatController {
    constructor(private hardhatService: HardhatServiceImpl) {}

    @Post('/detect')
    async createSignal(@Body() dto: HardhatRequestDto): Promise<HardhatResponseDto> {
        return this.hardhatService.createSignal(dto);
    }
}
