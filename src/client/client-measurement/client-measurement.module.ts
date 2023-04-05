import { ClientMeasurementController } from './controller/client-measurement.controller';
import { ClientMeasurementHelperService } from './services/client-measurement-helper.service';
import { ClientMeasurementService } from './services/client-measurement.service';
import { ClientMeasurement } from './model/client-measurement.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';

@Module({
    controllers: [
        ClientMeasurementController
    ],
    imports: [
        TypeOrmModule.forFeature([ClientMeasurement])
    ],
    providers: [
        ClientMeasurementService,
        ClientMeasurementHelperService,
        Repository
    ]
})
export class ClientMeasurementModule { }
