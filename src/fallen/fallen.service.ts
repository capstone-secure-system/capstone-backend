import { Injectable } from '@nestjs/common';
import { FallenRequestDto } from './dto/FallenRequestDto';
import { FallenResponseDto } from './dto/FallenResponseDto';
import { FallenService } from './interface/FallenService';
import { SnsService } from 'src/sns/sns.service';
import { DynamodbService } from 'src/dynamodb/dynamodb.service';

@Injectable()
export class FallenServiceImpl implements FallenService {
    constructor(
        private snsService : SnsService,
        private dynamoDbService: DynamodbService) {}

    async createSignal(dto: FallenRequestDto,snapShotUrl : String): Promise<FallenResponseDto> {
        console.log(`${dto.label} ${dto.detectedNum} detected!! ${Date.now()}`);

        this.snsService.triggerTopic(`${dto.detectedNum} fallen workers detected! \n detect image :  ${snapShotUrl}`);
        this.dynamoDbService.putItem(snapShotUrl,dto.label,dto.detectedNum);

        return new FallenResponseDto.Builder()
            .setStatus("success")
            .setLabel("fallen-detected")
            .setCreatedAt(new Date())
            .build();
    }

    async findAllSnapShot(): Promise<FallenResponseDto[]> {
        const items =  await this.dynamoDbService.findItemsByLabel("Fall-Detected");
        const responseList: FallenResponseDto[] = [];

        items.forEach(item => {
            const responseDto = new FallenResponseDto.Builder()
                                .setSnapShotId(item.snapshotId)
                                .setLabel(item.label)
                                .setDetectedNum(item.detectedNum)
                                .setCreatedAt(item.createdAt)
                                .setImgUrl(item.imageUrl)
                                .build();
            responseList.push(responseDto);
        });

        responseList.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        return responseList;
    }
}
