import { Module } from '@nestjs/common';
import { RealtimeService } from './realtime.service';
import { EventsGateway } from 'src/events/events/events.gateway';
import { DynamodbService } from 'src/dynamodb/dynamodb.service';
import { RealtimeController } from './realtime.controller';

@Module({
    providers: [EventsGateway,DynamodbService,RealtimeService],
    controllers: [RealtimeController]
})
export class RealtimeModule {}
