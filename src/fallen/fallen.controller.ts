import { Controller,Get,Post,Body,UseGuards, UseInterceptors,UploadedFile } from '@nestjs/common';
import { FallenRequestDto } from './dto/FallenRequestDto';
import { FallenResponseDto } from './dto/FallenResponseDto';
import { FallenService } from './interface/FallenService';
import { FallenServiceImpl } from './fallen.service';
import { Cooldown } from 'src/cooldown/cooldown.decorator';
import { CooldownGuard } from 'src/cooldown/cooldown.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/s3/s3.service';

@Controller('/fallen')
export class FallenController {
    constructor(
        private fallenService : FallenServiceImpl,
        private s3Service : S3Service) {}

    @Post("/detect")
    @Cooldown("/fallen/detect",10)
    @UseGuards(CooldownGuard)
    @UseInterceptors(FileInterceptor('file'))
    async getFallenSignal(
        @UploadedFile() file : Express.Multer.File,
        @Body() dto: FallenRequestDto): Promise<FallenResponseDto> {
        const snapShotUrl = await this.s3Service.uploadFile(file);
        return this.fallenService.createSignal(dto,snapShotUrl);
    }
}
