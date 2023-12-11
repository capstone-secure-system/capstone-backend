import { Injectable } from '@nestjs/common';
import { FallenRequestDto } from './dto/FallenRequestDto';
import { FallenResponseDto } from './dto/FallenResponseDto';
import { FallenService } from './interface/FallenService';
import { SnsService } from 'src/sns/sns.service';
import { S3Service } from 'src/s3/s3.service';
import { DynamodbService } from 'src/dynamodb/dynamodb.service';

@Injectable()
export class FallenServiceImpl implements FallenService {
    constructor(
        private snsService : SnsService,
        private dynamoDbService: DynamodbService) {}

    async createSignal(dto: FallenRequestDto,snapShotUrl : String): Promise<FallenResponseDto> {
        console.log(`${dto.label} ${dto.detectedNum} detected!! ${Date.now()}`);

        //this.snsService.triggerTopic(`${dto.detectedNum} fallen workers detected!`);
        this.dynamoDbService.putItem(snapShotUrl,dto.label);

        return new FallenResponseDto.Builder()
            .setStatus("success")
            .setLabel("fallen-detected")
            .setCreatedAt(new Date())
            .build();
    }
}
