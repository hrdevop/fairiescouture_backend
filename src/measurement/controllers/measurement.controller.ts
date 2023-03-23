import { Controller, Post, Body } from '@nestjs/common';
import { MeasurementDto } from '../model/dto/measurement.dto';

@Controller('measurement')
export class MeasurementController {

    @Post('create')
    onAddMeasurement(@Body() measurementDto: MeasurementDto) {
        return measurementDto
    }

}
