import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
//update user dto from create user dto with partial type included id,create_at,update_at field created by mongoose
export class UpdateUserDto extends PartialType(CreateUserDto) {
    id: string;
    create_at: string;
    update_at: string;
}
