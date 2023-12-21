import { Injectable } from '@nestjs/common';
import { DynamodbService } from 'src/dynamodb/dynamodb.service';
import { EventsGateway } from 'src/events/events/events.gateway';

@Injectable()
export class RealtimeService {
    constructor(
        private eventGateway: EventsGateway,
        private dynamoDbService: DynamodbService
    ) {}

    async handleLambdaRequest() {
        const data = await this.dynamoDbService.findAll();

        data.sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        this.eventGateway.sendSnapShotToClients(data);
    }
}
