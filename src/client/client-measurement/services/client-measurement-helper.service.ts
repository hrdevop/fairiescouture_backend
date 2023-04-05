import { clientMeasurementInterface } from 'src/client/client-measurement/model/client-measurement.interface';
import { ClientMeasurementDto } from './../model/dto/client-measurement.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientMeasurementHelperService {

    dtoToEntity = (clientMeasurementDto: ClientMeasurementDto): clientMeasurementInterface => {
        return {
            clientId: clientMeasurementDto.clientId,
            measurementTypeId: clientMeasurementDto.measurementTypeId,
            inches: clientMeasurementDto.inches
        }
    }
}
