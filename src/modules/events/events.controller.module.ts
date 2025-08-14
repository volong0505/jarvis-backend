import { Module, Provider } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule } from "@nestjs/mongoose";
import { CreateEventHandler } from "./commands/hanlers/create-event.handler";
import { DeleteEventHandler } from "./commands/hanlers/delete-event.command";
import { EventsFactory } from "./domain";
import { EventsController } from "./events.controller";
import { EventInjectionTokenEnum } from "./events.inject-token";
import { EventsService } from "./events.service";
import { EventsQueryImpl } from "./infrastructure/query/events.query-impl";
import { EventsRepositoryImpl } from "./infrastructure/repository/events.repository-impl";
import { FindEventsHandler } from "./queries/handlers/find-events.handler";
import { EventSchema } from "./schema/events.schema";

const infrastructure: Provider[] = [
    {
        provide: EventInjectionTokenEnum.EVENTS_REPOSITORY,
        useClass: EventsRepositoryImpl
    },
    {
        provide: EventInjectionTokenEnum.EVENTS_QUERY,
        useClass: EventsQueryImpl
    }
]

const domains = [EventsFactory]

const commands = [
    CreateEventHandler,
    DeleteEventHandler
]

const queries = [
    FindEventsHandler
]
@Module({
    imports: [
        CqrsModule,
        MongooseModule.forFeature([
            { name: Event.name, schema: EventSchema },
        ]),
    ],
    controllers: [
        EventsController
    ],
    providers: [
        EventsService,
        ...infrastructure,
        ...domains,
        ...queries,
        ...commands,
    ],
})
export class EventsModule { }