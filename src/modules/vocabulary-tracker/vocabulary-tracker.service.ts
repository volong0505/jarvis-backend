import { Injectable } from "@nestjs/common";
import { GeminiService } from "../gemini";
import { CreateVocabularyRequest, CreateVocabularyResponse, FindAllByLanguageRequest, FindAllByLanguageResponse, WordsItem } from "./dto";
import { VocabularyRepository } from "./repository/vocabulary.repository";
@Injectable()
export class VocabularyTrackerService {
  constructor (
    private readonly vocabularyRepository: VocabularyRepository,
    private readonly geminiService: GeminiService,
  ) {}

    async generateWord(word: string) {
        // Call Gemini service to get vocabulary details
        const geminiResponse = await this.geminiService.generateWordDetail(word);
        
        // Process the response and return it
        return {
        languageCode: 'en',
        word: geminiResponse.word,
        translation: geminiResponse.translation,
        meaning: geminiResponse.meaning,
        ipa: geminiResponse.ipa,
        pronunciation: geminiResponse.pronunciation,
        level: geminiResponse.level,
        partsOfSpeech: geminiResponse.partsOfSpeech,
        tags: geminiResponse.tags,
        examples: geminiResponse.examples,
        };
    }

    async getVocabularyList(req: FindAllByLanguageRequest): Promise<FindAllByLanguageResponse> {
        // Fetch the vocabulary list from the repository
        const params = {
            languageCode: 'en',
            sortField: 'createdAt',
            sortOrder: '-1',
            keyword: req.keyword || '',
        }

        const [rawData, total] = await Promise.all([
            this.vocabularyRepository.findAllByLanguage(params),
            this.vocabularyRepository.countTotal(params)
        ])

        const data: WordsItem[] = rawData.map(item => ({
            _id: item._id.toString(),
            word: item.word,
            meaning: item.meaning,
            ipa: item.ipa,
            level: item.level,
            partsOfSpeech: item.partsOfSpeech,
            translation: item.translation,
            pronunciation: item.pronunciation,
            tags: item.tags,
            examples: item.examples || [],
        }));        
        // Return the vocabulary list
        return {
            data,
            total
        };
    } 

    async create(vocab: CreateVocabularyRequest): Promise<CreateVocabularyResponse> {
        // Create a new vocabulary entry using the repository
        const newVocabulary = await this.vocabularyRepository.create(vocab);
        
        // Return the created vocabulary entry
        return {
            success: true,
            message: 'Vocabulary created successfully',
            data: {...newVocabulary, _id: newVocabulary._id.toString()},
            timestamp: new Date().toISOString(),
        };
    }
}

