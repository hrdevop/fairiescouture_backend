import { Injectable, HttpException, } from '@nestjs/common';

import {
    S3Client,
    PutObjectCommand,
    PutObjectCommandInput,
    PutObjectCommandOutput,
    Delete,
    DeleteObjectCommandInput,
    DeleteObjectCommand,
    DeleteObjectCommandOutput
} from '@aws-sdk/client-s3';

@Injectable()
export class AwsS3Service {
    private region: string;
    private s3: S3Client;
    private bucket;

    constructor() {
        this.region = process.env.S3_REGION
        this.bucket = process.env.S3_BUCKET
        this.s3 = new S3Client({
            region: this.region,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY
            }
        })
    }


    upload = async (file: Express.Multer.File): Promise<string> => {
        const input: PutObjectCommandInput = {
            Body: file.buffer,
            Bucket: this.bucket,
            Key: file.originalname,
            ContentType: file.mimetype,
            ACL: 'public-read',
        }
        try {
            const response: PutObjectCommandOutput = await this.s3.send(new PutObjectCommand(input))
            if (response.$metadata.httpStatusCode === 200) {
                return `http://${this.bucket}.s3.${this.region}.amazonaws.com/${file.originalname}`;
            } else {
                throw new HttpException(response, response.$metadata.httpStatusCode)
            }
        } catch (err) {
            throw err
        }
    }


    delete = async (fileName: string): Promise<any> => {

        const input: DeleteObjectCommandInput = {
            Bucket: this.bucket,
            Key: fileName
        } 
        const response: DeleteObjectCommandOutput = await this.s3.send(new DeleteObjectCommand(input))
        try {
            console.log(response);
            
            if (response.$metadata.httpStatusCode === 204) {
                return true
            } else { 
                throw new HttpException(response, response.$metadata.httpStatusCode)
            }
        } catch (e) {
            throw e
        }
    }
}
