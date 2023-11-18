import { FallenRequestDto } from "../dto/FallenRequestDto";
import { FallenResponseDto } from "../dto/FallenResponseDto";

export interface FallenService {
    createSignal(dto: FallenRequestDto): Promise<FallenResponseDto>;
}