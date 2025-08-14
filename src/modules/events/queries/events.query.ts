import { SearchEventsRequest } from "../dto";
import { Events } from "../schema/events.schema"


export class EventsQuery {
    findOne!: (id: string) => Promise<Events>;
    findAll!: (params: SearchEventsRequest) => Promise<Events[]>
}