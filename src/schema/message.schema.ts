
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message  {
    @Prop()
    sender: string;

    @Prop()
    receiver: string;

    @Prop()
    message: string;

    _id:string;
    createdAt:Date;
    updatedAt:Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);