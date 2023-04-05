import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientService } from './services/client.service';
import { ClientHelperService } from './services/client-helper.service';
import { ClientController } from './controllers/client.controller';
import { Module } from '@nestjs/common';
import { Clients } from './model/client.model';
import { Repository } from 'typeorm';
import { ClientMeasurementModule } from './client-measurement/client-measurement.module';
import { ClientOrderModule } from './client-order/client-order.module';

@Module({
    controllers: [ClientController],
    imports: [
        TypeOrmModule.forFeature([Clients]),
        ClientMeasurementModule,
        ClientOrderModule
    ],
    providers: [
        ClientHelperService,
        ClientService,
        Repository]
})
export class ClientModule { }
