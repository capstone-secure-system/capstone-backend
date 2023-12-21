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

    async putItem(imageUrl : String,label : String,detectedNum: number) {
        const snapshotId = new Date().getMilliseconds().toString()

        const snapshot = new SnapShot(
            snapshotId,
            new Date().toISOString(),
            label,
            imageUrl,
            detectedNum
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

    async findAll(): Promise<any> {
        const params = {
          TableName: 'capstone-DB', 
        };
    
        try {
          const data = await this.dynamoDb.scan(params).promise();
          return data.Items;
        } catch (error) {
          throw new Error(`Error retrieving data: ${error}`);
        }
      }

    async findItemsByLabel(label: string): Promise<any[]> {
        const params = {
            TableName: "capstone-DB",
            IndexName: "index-label",
            KeyConditionExpression: "#lbl = :label",
            ExpressionAttributeNames: {
                "#lbl" : "label",
            },
            ExpressionAttributeValues: {
                ":label": label,
            },
        };

        try {
            const items = await this.dynamoDb.query(params).promise();
            return items.Items || [];
        } catch(error) {
            console.error(error);
            throw error;
        }
    }
}
