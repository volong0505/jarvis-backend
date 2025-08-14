import { SearchEventsRequest } from "../../dto";

export class FindEventsQuery {
    constructor(
        public readonly dto: SearchEventsRequest
    ) {}
}