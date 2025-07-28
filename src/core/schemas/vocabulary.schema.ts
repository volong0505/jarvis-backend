import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type VocabularyDocument = Vocabulary & Document;

@Schema({ _id: false })
export class Example {
  @Prop({ required: true })
  sentence!: string;

  @Prop()
  pronunciation?: string;

  @Prop()
  meaning!: string;
}

@Schema({ _id: false })
export class RelatedWords {
  @Prop({ required: true })
  word!: string;

  @Prop()
  translation!: string;
}

const ExampleSchema = SchemaFactory.createForClass(Example);
const RelatedWordsSchema = SchemaFactory.createForClass(RelatedWords);


@Schema({ timestamps: true })
export class Vocabulary {
  @Prop({ required: true })
  _id!: Types.ObjectId;

  @Prop({ required: true })
  languageCode!: string; // ISO code like 'en', 'jp'

  @Prop({ required: true })
  word!: string;

  @Prop({ required: true })
  translation!: string;

  @Prop()
  meaning!: string;

  @Prop()
  ipa!: string

  @Prop()
  pronunciation?: string;

  @Prop()
  level?: string;

  @Prop()
  partsOfSpeech?: string;
  
  @Prop()
  category?: string;

  @Prop({ type: [RelatedWordsSchema], default: [] })
  relatedWords!: RelatedWords[]

  @Prop({ type: [ExampleSchema], default: [] })
  examples!: Example[];

  @Prop()
  creationDate?: Date;

  @Prop()
  latestReviewDate?: Date;

}

export const VocabularySchema = SchemaFactory.createForClass(Vocabulary);