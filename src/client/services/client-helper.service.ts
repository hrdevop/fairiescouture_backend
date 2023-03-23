import { ClientInterface } from '../model/client.interface';
import { ClientDto } from '../model/dto/client.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientHelperService {
    createClientDtoToEntity = (createClient: ClientDto): ClientInterface => {
        return {
            firstName: createClient.firstName,
            lastName: createClient.lastName,
            phoneNumber: createClient.phoneNumber,
            emailId: createClient.emailId,
            flatNumber: createClient.flatNumber,
            residence: createClient.residence,
            address: createClient.address,
            notes: createClient.notes,
        }
    }
}
