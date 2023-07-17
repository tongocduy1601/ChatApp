
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ConversationDocument = HydratedDocument<Conversation>;

@Schema()
export class Conversation  {
    @Prop()
    creator: string;

    @Prop()
    type: number;

    @Prop()
    avatar: string;

    @Prop()
    is_active: boolean;

    _id:string;
    createdAt:Date;
    updatedAt:Date;

}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);