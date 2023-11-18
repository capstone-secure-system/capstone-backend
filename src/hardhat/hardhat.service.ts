import { Injectable } from '@nestjs/common';
import { HardhatService } from './interface/HardhatService';
import { HardhatRequestDto } from './dto/HardhatRequestDto';
import { HardhatResponseDto } from './dto/HardhatResponseDto';

@Injectable()
export class HardhatServiceImpl implements HardhatService {

    async createSignal(dto: HardhatRequestDto): Promise<HardhatResponseDto> {
        console.log(`${dto.label} detected!!`);

        return new HardhatResponseDto.Builder()
            .setStatus("success")
            .setLabel("hardhat")
            .setCreatedAt(new Date())
            .build();
    }
}
