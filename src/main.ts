import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './core';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors({
    origin: [appConfig.corsOrigins],
    credentials: true
  })
  const port = appConfig.port || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
