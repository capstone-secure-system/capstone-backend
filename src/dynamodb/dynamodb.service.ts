import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { SnapShot } from 'src/global/snapshot';

@Injectable()
export class DynamodbService {
    private dynamoDb: DynamoDB.DocumentClient;

    constructor() {
        this.dynamoDb = new DynamoDB.DocumentClient({
            region: process.env.AWS_DYNAMODB_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
     });
    }

    async putItem(imageUrl : String,label : String) {
        const snapshot = new SnapShot(
            new Date().getMilliseconds().toString(),
            new Date().toISOString(),
            label,
            imageUrl
        )

        const params = {
            TableName: process.env.AWS_DYNAMODB_TABLE_NAME,
            Item: snapshot
        }

        try {
            await this.dynamoDb.put(params).promise();
        } catch(error) {
            throw error;
        }
    }
}
