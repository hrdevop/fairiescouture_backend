import { FileHandlerService } from './../service/file-handler.service';
import { Controller, Delete, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileHandlerController {
    constructor(private fileHandlerService: FileHandlerService) { }

    @UseInterceptors(FileInterceptor('file'))
    @Post()
    async upload(@UploadedFile() file: Express.Multer.File) {
        return await this.fileHandlerService.upload(file) 
    }

    @Delete(':id')
    async delete(@Param('id') fileId: string) {
        return this.fileHandlerService.delete(fileId)
    }
}
