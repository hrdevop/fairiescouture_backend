import { MeasurementTypeHelperService } from './../services/measurement-type-helper.service';
import { MeasurementTypeService } from './../services/measurement-type.service';
import { Controller, Post, Body } from '@nestjs/common';
import { MeasurementTypeDto } from '../model/dto/measurement-type.dto';

@Controller('measurementType')
export class MeasurementTypeController {
    constructor(private readonly measurementTypeService: MeasurementTypeService,
        private readonly measurementTypeHelperService: MeasurementTypeHelperService) {

    }
    @Post('create')
    onAddMeasurement(@Body() measurementTypeDto: MeasurementTypeDto) {
        const entity = this.measurementTypeHelperService.dtoToEntity(measurementTypeDto)
        return this.measurementTypeService.create(entity)
    }

}
