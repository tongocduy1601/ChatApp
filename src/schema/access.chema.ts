
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';

export type AccessDocument = HydratedDocument<Access>;

@Schema()
export class Access  {
    @Prop()
    userId: UUID;

    @Prop()
    session: string;

    @Prop()
    token: string;

    _id:string;
    createdAt:Date;
    updatedAt:Date;

}

export const AccessSchema = SchemaFactory.createForClass(Access);