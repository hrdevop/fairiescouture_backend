import { IsEmail, IsNotEmpty, IsOptional, IsString, IsPhoneNumber } from 'class-validator';
import { ClientInterface } from './../client.interface';

export class ClientDto extends ClientInterface {

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsPhoneNumber('IN')
    phoneNumber?: string;

    @IsOptional()
    @IsEmail()
    emailId?: string;

} 