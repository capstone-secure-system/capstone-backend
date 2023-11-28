import { Controller,Get,Post,Body,UseGuards } from '@nestjs/common';
import { FallenRequestDto } from './dto/FallenRequestDto';
import { FallenResponseDto } from './dto/FallenResponseDto';
import { FallenService } from './interface/FallenService';
import { FallenServiceImpl } from './fallen.service';
import { Cooldown } from 'src/cooldown/cooldown.decorator';
import { CooldownGuard } from 'src/cooldown/cooldown.guard';

@Controller('/fallen')
export class FallenController {
    constructor(private fallenService : FallenServiceImpl) {}

    @Post("/detect")
    @Cooldown("/fallen/detect",10)
    @UseGuards(CooldownGuard)
    async getFallenSignal(@Body() dto: FallenRequestDto): Promise<FallenResponseDto> {
        return this.fallenService.createSignal(dto);
    }
}
