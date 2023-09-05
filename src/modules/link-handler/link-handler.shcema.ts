import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Link {
  @Prop()
  randomUrlKey: string;
  @Prop()
  originalUrl: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
