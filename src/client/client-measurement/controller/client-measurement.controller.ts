import { ClientMeasurementService } from './../services/client-measurement.service';
import { ClientMeasurementHelperService } from './../services/client-measurement-helper.service';
import { ClientMeasurementDto } from './../model/dto/client-measurement.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientInterface } from 'src/client/model/client.interface';

@Controller('clientMeasurement')
export class ClientMeasurementController {
    constructor(private readonly clientMeasurementHelperService: ClientMeasurementHelperService,
        private readonly clientMeasurementService: ClientMeasurementService
    ) {
    }

    @Get(':clientId')
    clientMeasurement(@Param('clientId') clientId: string) {
        const client: ClientInterface = { id: clientId };
        return this.clientMeasurementService.getClientMeasurement(client)
    }

    @Post()
    addMeasurement(@Body() clientMeasurementDto: ClientMeasurementDto) {
        const entity = this.clientMeasurementHelperService.dtoToEntity(clientMeasurementDto)
        return this.clientMeasurementService.addMeasurement(entity)
    }

}
