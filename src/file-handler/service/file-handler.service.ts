import { AwsS3Service } from './aws-s3.service';
import { Injectable, Delete } from '@nestjs/common';
import { FileHandlerInterface } from '../model/file-handler.interface';
import { Repository } from 'typeorm';
import { Files } from '../model/file-handler.model';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class FileHandlerService {

    constructor(
        @InjectRepository(Files)
        private fileRepository: Repository<Files>,
        private awsS3Service: AwsS3Service
    ) { }

    upload = async (file: Express.Multer.File) => {
        file.originalname = this.fileNameTransformer(file.originalname) || randomUUID()
        const s3Url: string = await this.awsS3Service.upload(file)
        const fileData: FileHandlerInterface = {
            name: file.originalname.split('.')[0],
            mimeType: file.mimetype,
            size: file.size,
            url: s3Url,
        }
        return await this.saveFileInfo(fileData)
    }


    delete = async (fileId: string) => {
        const file = await this.fileDetail(fileId)
        const deleteFromS3 = await this.awsS3Service.delete(file.name)
        if (deleteFromS3) {
            return await this.deleteFileData(fileId)
        }
    }

    private fileDetail = async (fileId: string): Promise<FileHandlerInterface> => {
        return await this.fileRepository.findOne({ where: { id: fileId } })
    }

    private deleteFileData = async (fileId: string): Promise<any> => {
        return await this.fileRepository.delete({ id: fileId })
    }

    private saveFileInfo = async (fileHandlerInterface: FileHandlerInterface): Promise<Object> => {
        try {
            return await this.fileRepository.save(fileHandlerInterface)
        } catch (err) {
            throw err
        }
    }

    private fileNameTransformer = (fileName: string) => fileName.split('.')[0].replace(/[^A-Z0-9]+/ig, '') + Date.now()
}
