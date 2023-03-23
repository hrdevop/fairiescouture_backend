import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './services/client.service';
import { ClientHelperService } from './services/client-helper.service';
import { ClientController } from './controllers/client.controller';
import { Module } from '@nestjs/common';
import { Clients } from './model/client.model';
import { Repository } from 'typeorm';

@Module({
    controllers: [ClientController],
    imports: [
        TypeOrmModule.forFeature([Clients])
    ],
    providers: [
        ClientHelperService,
        ClientService,
        Repository]
}) 
export class ClientModule { }
