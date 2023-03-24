import { MeasurementTypeInterface } from './../model/measurement-type.interface';
import { MeasurementType } from './../model/measurement-type.model';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MeasurementTypeService {

    constructor(
        @InjectRepository(MeasurementType)
        private measurementTypeRepository: Repository<MeasurementType>) { }

    create = async (measurementType: MeasurementTypeInterface) => {
        try {
            if (!this.isExits(measurementType)) {
                return await this.measurementTypeRepository.save(measurementType)
            } else {
                throw new HttpException("Measurement type already exists", HttpStatus.CONFLICT);
            }
        } catch (e: Error | any) {
            throw e
        }
    }

    isExits = async (measurementType: MeasurementTypeInterface) => {
        const count = await this.measurementTypeRepository.count({ where: measurementType })
        return count > 0
    }
}
