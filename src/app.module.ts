import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongoDatabaseModule } from './core';
import { VocabularyTrackerModule } from './modules/vocabulary-tracker/vocabulary-tracker.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongoDatabaseModule,
    VocabularyTrackerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//test new repository
