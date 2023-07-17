import { IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {

    firstName: string
    lastName: string;
    middleName: string;
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
    phone: string;
    avatar: string;
    is_active: boolean;
}

