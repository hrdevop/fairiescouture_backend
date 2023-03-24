import { MeasurementTypeService } from './services/measurement-type.service';
import { MeasurementTypeHelperService } from './services/measurement-type-helper.service';
import { MeasurementTypeController } from './controllers/measurement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MeasurementType } from './model/measurement-type.model';
import { Repository } from 'typeorm';

@Module({
    controllers: [
        MeasurementTypeController
    ],
    imports: [
        TypeOrmModule.forFeature([MeasurementType])
    ],
    providers:
        [
            MeasurementTypeHelperService,
            MeasurementTypeService,
            Repository
        ]

})
export class MeasurementTypeModule { }
