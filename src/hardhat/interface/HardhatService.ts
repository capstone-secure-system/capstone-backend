import { HardhatRequestDto } from "../dto/HardhatRequestDto";
import { HardhatResponseDto } from "../dto/HardhatResponseDto";

export interface HardhatService {
    createSignal(dto: HardhatRequestDto): Promise<HardhatResponseDto>;
}