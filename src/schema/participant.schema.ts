
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';

export type ParticipantDocument = HydratedDocument<Participant>;

@Schema()
export class Participant {
    @Prop()
    userId: UUID;

    @Prop()
    conservation_id: UUID;

    @Prop()
    type: number;

    _id: string;
    createdAt: Date;
    updatedAt: Date;

}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);