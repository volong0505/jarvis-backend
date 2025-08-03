import { Controller, Get, Post, Query } from "@nestjs/common";
import { CreateVocabularyRequest, CreateVocabularyResponse } from "./dto";
import { FindAllByLanguageResponse } from "./dto/find-all";
import { VocabularyTrackerService } from "./vocabulary-tracker.service";

@Controller('vocabulary-tracker')
export class VocabularyTrackerController {
  
    constructor(
        private readonly service: VocabularyTrackerService
    ) {}

    @Get('generate-word')
    async generateWord(@Query() req: { word: string }) {
        // Call the service to generate word details
        const wordDetails = await this.service.generateWord(req.word);
        
        // Return the generated word details
        return {
            success: true,
            data: wordDetails,
        };
    }

    @Get('vocabulary-list')
    async getVocabularyList(): Promise<FindAllByLanguageResponse> {
        // Call the service to get the vocabulary list
        const vocabularyList = await this.service.getVocabularyList();
        
        // Return the vocabulary list
        return {
            data: vocabularyList.data,
        };
    }

    @Post('create-vocabulary')
    createVocabulary(@Query() req: CreateVocabularyRequest): Promise<CreateVocabularyResponse> {
        // Call the service to create a new vocabulary entry
        return this.service.create(req);
        
    }   

}