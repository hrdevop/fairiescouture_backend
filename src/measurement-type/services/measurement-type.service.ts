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
            if (! await this.isExits(measurementType)) {
                return await this.measurementTypeRepository.save(measurementType)
            } else {
                throw new HttpException("Measurement type already exists", HttpStatus.CONFLICT);
            }
        } catch (e: Error | any) {
            throw e
        }
    }

    list = async () => {
        return this.measurementTypeRepository.find()
    }

    private isExits = async (measurementType: MeasurementTypeInterface) => {
        const count = await this.measurementTypeRepository.count({ where: measurementType })
        if (count) {
            return count > 0
        }
        return false
    }
}
