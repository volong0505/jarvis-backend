import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Vocabulary, VocabularyDocument } from '../schema/vocabulary.schema';
import { CreateVocabularyRequest } from '../dto';

@Injectable()
export class VocabularyRepository {
  constructor(

    @InjectModel(Vocabulary.name)
    private readonly model: Model<VocabularyDocument>,
  ) {}

  async create(vocab: Partial<CreateVocabularyRequest>): Promise<Vocabulary> {
    const _id = new Types.ObjectId()
    return this.model.create({_id, ...vocab, creationDate: new Date});
  }

  async findAllByLanguage(params: any): Promise<Vocabulary[]> {
    const { languageCode, sortField, sortOrder } = params;  
    const conditions = {
      languageCode: languageCode,
    }

    let query = this.model.find(conditions);

    if (sortField && sortOrder) {
      const orderValue = sortOrder === 'desc' || sortOrder === '-1' ? -1 : 1;
      query = query.sort({ [sortField]: orderValue });
    }

    return query.exec();
  }

  async findByWord(languageCode: string, word: string): Promise<Vocabulary | null> {
    return this.model.findOne({ languageCode, word }).exec();
  }

  async findByCategory(languageCode: string, category: string): Promise<Vocabulary[]> {
    return this.model.find({ languageCode, category }).exec();
  }

  async updateById(id: string, update: Partial<Vocabulary>): Promise<Vocabulary | null> {
    return this.model.findByIdAndUpdate(id, update, { new: true }).exec();
  }

  async deleteById(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}