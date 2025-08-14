import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindEventsQuery } from "../impl/find-events.query";
import { Inject } from "@nestjs/common";
import { EventsQuery } from "../events.query";
import { EventInjectionTokenEnum } from "../../events.inject-token";

@QueryHandler(FindEventsQuery)
export class FindEventsHandler implements IQueryHandler<FindEventsQuery> {
    constructor(
        @Inject(EventInjectionTokenEnum.EVENTS_QUERY) 
            private readonly query: EventsQuery
    ) {}

    execute(query: FindEventsQuery): Promise<any> {
        return this.query.findAll(query.dto)
    }

}