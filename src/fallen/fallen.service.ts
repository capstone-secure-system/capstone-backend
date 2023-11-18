import { Injectable } from '@nestjs/common';
import { FallenRequestDto } from './dto/FallenRequestDto';
import { FallenResponseDto } from './dto/FallenResponseDto';
import { FallenService } from './interface/FallenService';

@Injectable()
export class FallenServiceImpl implements FallenService {

    async createSignal(dto: FallenRequestDto): Promise<FallenResponseDto> {
        console.log(`${dto.label} detected!!`)

        return new FallenResponseDto.Builder()
            .setStatus("success")
            .setLabel("fallen-detected")
            .setCreatedAt(new Date())
            .build();
    }
}
