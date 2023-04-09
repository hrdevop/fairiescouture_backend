import { ClientMeasurement } from './../model/client-measurement.model';
import { clientMeasurementInterface } from 'src/client/client-measurement/model/client-measurement.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientInterface } from 'src/client/model/client.interface';

@Injectable()
export class ClientMeasurementService {

    constructor(
        @InjectRepository(ClientMeasurement)
        private readonly clientMeasurementRepository: Repository<ClientMeasurement>
    ) { }

    addMeasurement = async (clientMeasurementInterface: clientMeasurementInterface) => {
        if (! await this.isExist(clientMeasurementInterface) && clientMeasurementInterface.inches > 0) {
            return this.create(clientMeasurementInterface)
        } else {
            if (!clientMeasurementInterface.inches) {
                return this.delete(clientMeasurementInterface);
            } else {
                return this.update(clientMeasurementInterface)
            }
        }
    }

    getClientMeasurement = async (client: ClientInterface): Promise<clientMeasurementInterface[]> => {
        return await this.clientMeasurementRepository.find({ where: { client: client }, relations: ['measurementType'] })
    }

    private isExist = async (clientMeasurementInterface: clientMeasurementInterface) => {
        const count = await this.clientMeasurementRepository.count({ where: { clientId: clientMeasurementInterface.clientId, measurementTypeId: clientMeasurementInterface.measurementTypeId } })
        return count > 0
    }

    private create = async (clientMeasurementInterface: clientMeasurementInterface) => {
        return await this.clientMeasurementRepository.save(clientMeasurementInterface)
    }

    private update = async (clientMeasurementInterface: clientMeasurementInterface) => {
        return await this.clientMeasurementRepository.update({ clientId: clientMeasurementInterface.clientId, measurementTypeId: clientMeasurementInterface.measurementTypeId }, { inches: clientMeasurementInterface.inches })
    }

    private delete = async (clientMeasurementInterface: clientMeasurementInterface) => {
        return await this.clientMeasurementRepository.delete({ clientId: clientMeasurementInterface.clientId, measurementTypeId: clientMeasurementInterface.measurementTypeId })
    }

}
