import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import { Vocabulary, VocabularySchema } from "./schema/vocabulary.schema";
import { VocabularyRepository } from "./repository/vocabulary.repository";

import { VocabularyTrackerService } from "./vocabulary-tracker.service";
import { VocabularyTrackerController } from "./vocabulary-tracker.controller";
import { GeminiModule } from "../gemini";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Vocabulary.name, schema: VocabularySchema },
        ]),
        GeminiModule
    ],
    controllers: [
        VocabularyTrackerController
    ],
    providers: [
        VocabularyTrackerService,
        VocabularyRepository
    ],
})
export class VocabularyTrackerModule { }