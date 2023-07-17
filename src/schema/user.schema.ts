import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
    timestamps: true,
})
export class User {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    middleName: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phone: string;

    @Prop(null)
    avatar: string;

    @Prop()
    is_active: true;

    _id:string;
    createdAt:Date;
    updatedAt:Date;

}

export const UserSchema = SchemaFactory.createForClass(User);

export interface IUser {
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    password: string;
    phone: string;
    avatar: string;
    is_active: true;

}