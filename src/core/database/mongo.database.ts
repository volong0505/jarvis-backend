import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ENV_MONGODB_URI } from "../constants";

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>(ENV_MONGODB_URI),
        }),
        inject: [ConfigService]
        })
    ]
})
export class MongoDatabaseModule {}