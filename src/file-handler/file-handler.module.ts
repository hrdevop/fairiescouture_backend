import { FileHandlerService } from './service/file-handler.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwsS3Service } from './service/aws-s3.service';
import { FileHandlerController } from './controller/file-handler.controller';
import { Module } from '@nestjs/common';
import { Files } from './model/file-handler.model';
import { Repository } from 'typeorm';
@Module({
    controllers: [
        FileHandlerController
    ],
    imports: [
        TypeOrmModule.forFeature([Files])
    ],
    providers: [
        AwsS3Service,
        FileHandlerService,
        Repository
    ],
})
export class FileHandlerModule { }
