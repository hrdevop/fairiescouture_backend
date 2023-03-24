import { MeasurementTypeInterface } from '../model/measurement-type.interface';
import { MeasurementTypeDto } from './../model/dto/measurement-type.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MeasurementTypeHelperService {

    dtoToEntity(measurementTypeDto: MeasurementTypeDto): MeasurementTypeInterface {
        return {
            name: measurementTypeDto.name
        }
    }
}
