import { PartialType } from '@nestjs/mapped-types';
import { CreateVocabularyRequest } from './create-vocabulary.dto';

export class UpdateVocabularyRequest extends PartialType(CreateVocabularyRequest) {}