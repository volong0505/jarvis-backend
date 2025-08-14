import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongoDatabaseModule } from './core';
import { VocabularyTrackerModule } from './modules/vocabulary-tracker/vocabulary-tracker.module';
import { EventsModule } from './modules/events/events.controller.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongoDatabaseModule,
    VocabularyTrackerModule,
    EventsModule, // Assuming EventsModule is defined and imported
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//test new repository
