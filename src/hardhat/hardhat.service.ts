import { Injectable } from '@nestjs/common';
import { HardhatService } from './interface/HardhatService';
import { HardhatRequestDto } from './dto/HardhatRequestDto';
import { HardhatResponseDto } from './dto/HardhatResponseDto';
import { SnsService } from 'src/sns/sns.service';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class HardhatServiceImpl implements HardhatService {
    constructor(
        private snsService : SnsService,
        private s3Service : S3Service
        ) {}

    async createSignal(dto: HardhatRequestDto): Promise<HardhatResponseDto> {
        console.log(`${dto.label} detected!!`);
        console.log(Date.now());

        //this.snsService.triggerTopic(`${dto.detectedNum} hardhat workers detected!`)

        return new HardhatResponseDto.Builder()
            .setStatus("success")
            .setLabel("hardhat")
            .setCreatedAt(new Date())
            .build();
    }
}
