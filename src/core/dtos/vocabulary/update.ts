import { PartialType } from '@nestjs/mapped-types';
import { CreateVocabularyDto } from './create';

export class UpdateVocabularyDto extends PartialType(CreateVocabularyDto) {}