import { Injectable } from '@nestjs/common';
import { FallenRequestDto } from './dto/FallenRequestDto';
import { FallenResponseDto } from './dto/FallenResponseDto';
import { FallenService } from './interface/FallenService';
import { SnsService } from 'src/sns/sns.service';

@Injectable()
export class FallenServiceImpl implements FallenService {
    constructor(private snsService : SnsService) {}

    async createSignal(dto: FallenRequestDto): Promise<FallenResponseDto> {
        console.log(`${dto.label} detected!!`);
        console.log(Date.now());

        //this.snsService.triggerTopic(`${dto.detectedNum} fallen workers detected!`)

        return new FallenResponseDto.Builder()
            .setStatus("success")
            .setLabel("fallen-detected")
            .setCreatedAt(new Date())
            .build();
    }
}
