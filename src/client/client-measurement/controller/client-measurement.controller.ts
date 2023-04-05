import { ClientMeasurementService } from './../services/client-measurement.service';
import { ClientMeasurementHelperService } from './../services/client-measurement-helper.service';
import { ClientMeasurementDto } from './../model/dto/client-measurement.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('clientMeasurement')
export class ClientMeasurementController {
    constructor(private readonly clientMeasurementHelperService: ClientMeasurementHelperService,
        private readonly clientMeasurementService: ClientMeasurementService
    ) {
    }
    @Post()
    addMeasurement(@Body() clientMeasurementDto: ClientMeasurementDto) {
        const entity = this.clientMeasurementHelperService.dtoToEntity(clientMeasurementDto)
        return this.clientMeasurementService.addMeasurement(entity) 
    } 

}
