import { Injectable } from '@nestjs/common';
import { SNS } from 'aws-sdk';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class SnsService {
    private sns: SNS;

    constructor() {
        this.sns = new SNS({
            region: process.env.AWS_SNS_REGION,
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    }

    async triggerTopic(message: string): Promise<void> {
        const params = {
            Message: message,
            TopicArn: process.env.AWS_SNS_TOPIC_ARN
        };

        try{
            const result = await this.sns.publish(params).promise();
            console.log('Message published to topic',result);
        } catch (error) {
            console.error('Error : failed to publish message to topic',error);
        }
    }
}