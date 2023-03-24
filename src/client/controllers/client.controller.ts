import { ClientDto } from '../model/dto/client.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientHelperService } from '../services/client-helper.service';
import { ClientService } from '../services/client.service';

@Controller('client')
export class ClientController {


    constructor(private readonly clientHelperService: ClientHelperService,
        private readonly clientService: ClientService) {
    }

    @Post('create')
    create(@Body() clientData: ClientDto) {
        let clientEntity = this.clientHelperService.createClientDtoToEntity(clientData)
        return this.clientService.create(clientEntity)
    }

    @Get('list')
    getList() {
        return this.clientService.getList()
    }
}
