import { Controller,Get } from '@nestjs/common';
import { RealtimeService } from './realtime.service';

@Controller('/realtime')
export class RealtimeController {
    constructor(
        private realtimeService: RealtimeService
    ) {}

    @Get()
    async getRealtimeData() {
        this.realtimeService.handleLambdaRequest();
    }
}
