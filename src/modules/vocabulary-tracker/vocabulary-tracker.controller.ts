import { Controller, Get, Param, Query } from "@nestjs/common";
import { VocabularyTrackerService } from "./vocabulary-tracker.service";

@Controller()
export class VocabularyTrackerController {
  
    constructor(
        private readonly service: VocabularyTrackerService
    ) {}

    @Get('/generate-word/:word')
    async generateWord(@Param() params: { word: string }) {
        // Call the service to generate word details
        const wordDetails = await this.service.generateWord(params.word);
        
        // Return the generated word details
        return {
            success: true,
            data: wordDetails,
        };
    }



}