import { Repository, JoinColumn, JoinTable } from 'typeorm';
import { Clients } from './../model/client.model';
import { ClientInterface } from './../model/client.interface';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(Clients)
        private clientRepository: Repository<Clients>) {
    }

    create = async (clientData: ClientInterface) => {
        try {
            if (!await this.isExits(clientData)) {
                return await this.clientRepository.save(clientData);
            } else {
                throw new HttpException("Client already exists", HttpStatus.CONFLICT)
            }
        } catch (e: Error | any) {
            throw e;
        }
    }

    getList = async () => {
        const data = await this.clientRepository.find({ relations: ['measurements', 'measurements.measurementType'] })
        return data
    }

    isExits = async (clientData: ClientInterface) => {
        if (clientData.emailId || clientData.phoneNumber) {
            const count = await this.clientRepository.count({ where: [{ emailId: clientData.emailId }, { phoneNumber: clientData.phoneNumber }] })
            return count > 0
        }
        return false
    }

}
