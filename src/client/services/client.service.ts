import { Repository } from 'typeorm';
import { Clients } from './../model/client.model';
import { ClientInterface } from './../model/client.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(Clients)
        private clientRepository: Repository<Clients>) {
    }

    create = async (clientData: ClientInterface) => {
        console.log(clientData);

        const insertData = await this.clientRepository.save(clientData);
        return insertData;

    }

}
