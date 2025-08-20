
export class Example {
  sentence!: string;
  pronunciation?: string;
  meaning!: string;
}

export class VocabularyDto {
  _id!: string
  languageCode!: string; // ISO code like 'en', 'jp'
  word!: string;
  translation!: string;
  meaning!: string;
  ipa!: string
  pronunciation?: string;
  level?: string;
  partsOfSpeech?: string[];
  tags?: string[];
  examples!: Example[];
  creationDate?: Date;
  latestReviewDate?: Date;
}