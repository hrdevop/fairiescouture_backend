import { TypeOrmModule } from '@nestjs/typeorm';
import { MeasurementController } from './controllers/measurement.controller';
import { Module } from '@nestjs/common';
import { Measurements } from './model/measurement.model';

@Module({
    controllers: [
        MeasurementController
    ],
    imports: [
        TypeOrmModule.forFeature([Measurements])
    ],
    providers: []

})
export class MeasurementModule { }
