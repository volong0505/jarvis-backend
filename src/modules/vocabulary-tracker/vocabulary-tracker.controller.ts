import { Body, Controller, Get, Post, Query, ServiceUnavailableException } from "@nestjs/common";
import { CreateVocabularyRequest, CreateVocabularyResponse } from "./dto";
import { FindAllByLanguageRequest, FindAllByLanguageResponse } from "./dto/find-all";
import { VocabularyTrackerService } from "./vocabulary-tracker.service";
import { ApiRoutesConstants } from "src/core";

const apiRoutes = ApiRoutesConstants.vocabularyTracker;
@Controller()
export class VocabularyTrackerController {

    constructor(
        private readonly service: VocabularyTrackerService
    ) { }

    @Get(apiRoutes.generateWord)
    async generateWord(@Query() req: { word: string }) {
        try {
            // Call the service to generate word details
            const wordDetails = await this.service.generateWord(req.word);

            // Return the generated word details
            return {
                success: true,
                data: wordDetails,
            }
        } catch (error) {
            // Handle any errors that occur during word generation
            throw new ServiceUnavailableException('Third-party service is unavailable');
        }
     
    }

    @Get(apiRoutes.search)
    async getVocabularyList(@Query() req: FindAllByLanguageRequest): Promise<FindAllByLanguageResponse> {

        // Call the service to get the vocabulary list
        const vocabularyList = await this.service.getVocabularyList(req);

        // Return the vocabulary list
        return {
            data: vocabularyList.data,
        };
    }

    @Post(apiRoutes.create)
    createVocabulary(@Body() body: CreateVocabularyRequest): Promise<CreateVocabularyResponse> {
        // Call the service to create a new vocabulary entry
        return this.service.create(body);

    }

}