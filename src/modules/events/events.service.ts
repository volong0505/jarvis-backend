import { Injectable } from "@nestjs/common";
import { QueryBus, CommandBus } from "@nestjs/cqrs";
import { CreateEventCommand } from "./commands/impl/create-event.command";
import { DeleteEventCommand } from "./commands/impl/delete-event.comand";
import { FindEventsQuery } from "./queries/impl/find-events.query";
import { SearchEventsRequest, SearchEventsResponse } from "./dto";

@Injectable()
export class EventsService {
     constructor(
        private readonly queryBus: QueryBus,
        private readonly commandBus: CommandBus
    ) {}

    async findAll(params: SearchEventsRequest): Promise<SearchEventsResponse> {
        
        const raw_data = await this.queryBus.execute(new FindEventsQuery(params));

        return {
            data: raw_data
        }
    }

    create(dto: any): Promise<void> {
        return this.commandBus.execute(new CreateEventCommand(dto))
    }

    delete(id: string): Promise<void> {
        return this.commandBus.execute(new DeleteEventCommand(id))
    }
}