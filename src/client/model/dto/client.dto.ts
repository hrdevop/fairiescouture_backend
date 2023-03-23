import { Allow, IsEmail, IsEmpty, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ClientInterface } from './../client.interface';

export class ClientDto extends ClientInterface {

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName?: string;

    @IsOptional()
    @IsInt()
    @Length(10, 10)
    phoneNumber?: number;

    @IsOptional()
    @IsEmail()
    emailId?: string;

} 