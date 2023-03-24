import { Allow, IsEmail, IsEmpty, IsInt, IsNotEmpty, IsOptional, IsString, Length, isPassportNumber, IsPhoneNumber } from 'class-validator';
import { ClientInterface } from './../client.interface';
import { Transform } from 'class-transformer';

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