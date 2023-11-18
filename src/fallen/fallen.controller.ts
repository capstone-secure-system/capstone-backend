import { Controller,Get,Post,Body } from '@nestjs/common';
import { FallenRequestDto } from './dto/FallenRequestDto';
import { FallenResponseDto } from './dto/FallenResponseDto';
import { FallenService } from './interface/FallenService';
import { FallenServiceImpl } from './fallen.service';

@Controller('/fallen')
export class FallenController {
    constructor(private fallenService : FallenServiceImpl) {}

    @Post("/detect")
    async getFallenSignal(@Body() dto: FallenRequestDto): Promise<FallenResponseDto> {
        return this.fallenService.createSignal(dto);
    }
}
