import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Service {
    private s3: S3;

    constructor() {
        this.s3 = new S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    }

    async uploadFile(file: Express.Multer.File) : Promise<String> {
        const uploadResult = await this.s3.upload({
            Bucket: process.env.AWS_S3_BUCKET_NAME,
            Body: file.buffer,
            Key: `fallen-${Date.now()}.png`,
            ContentType: file.mimetype
          }).promise();
      
          return uploadResult.Location;
    }
}
