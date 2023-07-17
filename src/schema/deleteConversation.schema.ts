import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeleteConversationDocument = HydratedDocument<DeleteConversation>;

@Schema()
export class DeleteConversation {
    @Prop()
    userId: string;

    @Prop()
    conservation_id: string;

    _id:string;
    createdAt:Date;
    updatedAt:Date;
}