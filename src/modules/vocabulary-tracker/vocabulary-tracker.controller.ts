import { Controller, Get, Param, Query } from "@nestjs/common";
import { VocabularyTrackerService } from "./vocabulary-tracker.service";

@Controller()
export class VocabularyTrackerController {
  
    constructor(
        private readonly service: VocabularyTrackerService
    ) {}

    @Get('vocabulary-tracker/generate-word')
    async generateWord(@Query() req: { word: string }) {
        // Call the service to generate word details
        const wordDetails = await this.service.generateWord(req.word);
        
        // Return the generated word details
        return {
            success: true,
            data: wordDetails,
        };
    }



}