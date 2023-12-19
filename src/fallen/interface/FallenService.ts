import { List } from "aws-sdk/lib/model";
import { FallenRequestDto } from "../dto/FallenRequestDto";
import { FallenResponseDto } from "../dto/FallenResponseDto";

export interface FallenService {
    createSignal(dto: FallenRequestDto,snapShotUrl : String): Promise<FallenResponseDto>;
    
    findAllSnapShot(): Promise<FallenResponseDto[]>;
}