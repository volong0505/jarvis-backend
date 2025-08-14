import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateResponseDto } from 'src/_shared';
import { VocabularyDto } from './vocabulary.dto';

class ExampleDto {
  @IsString()
  @IsNotEmpty()
  sentence!: string;

  @IsOptional()
  @IsString()
  pronunciation?: string;

  @IsOptional()
  @IsString()
  meaning?: string;
}

export class CreateVocabularyRequest {
  @IsString()
  @IsNotEmpty()
  languageCode!: string;

  @IsString()
  @IsNotEmpty()
  word!: string;

  @IsString()
  @IsNotEmpty()
  translation!: string;

  @IsOptional()
  @IsString()
  pronunciation?: string;

  @IsOptional()
  @IsString()
  meaning?: string;

  @IsOptional()
  @IsString()
  ipa?: string;

  @IsOptional()
  @IsString()
  level?: string;

   @IsOptional()
  @IsString()
  partsOfSpeech?: string;

  @IsOptional()
  @IsString()
  tags?: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExampleDto)
  examples!: ExampleDto[];

}

export class CreateVocabularyResponse extends CreateResponseDto<VocabularyDto> {}