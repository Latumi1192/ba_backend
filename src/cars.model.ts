// car.model.ts
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  brand: string;

  @Prop()
  carname: string;

  @Prop()
  price: number;

  @Prop()
  leasingrate: number;

  @Prop()
  availability: boolean;

  @Prop()
  ID: number;

  @Prop()
  count: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);
