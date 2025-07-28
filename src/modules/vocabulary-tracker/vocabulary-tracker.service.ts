import { Injectable } from "@nestjs/common";
import { VocabularyRepository } from "../../core";
import { GeminiService } from "../gemini";

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
        category: geminiResponse.category,
        examples: geminiResponse.examples,
        relatedWords: geminiResponse.relatedWords,
        };
    }
}

