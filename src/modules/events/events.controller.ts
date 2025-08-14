import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { EventsService } from "./events.service";
import { SearchEventsRequest, SearchEventsResponse, UpsertEventRequest } from "./dto";
import { ApiRoutesConstants } from "src/core";

const apiRoutes = ApiRoutesConstants.events;

@Controller()
export class EventsController {
    constructor(
        private readonly service: EventsService,
    ) {}

    @Get(apiRoutes.search)
    findAll(@Query() params: SearchEventsRequest): Promise<SearchEventsResponse> {
        return this.service.findAll(params)
    }

    @Post(apiRoutes.create)
    create(@Body() body: UpsertEventRequest) {
        return this.service.create(body)
    }

    @Delete(apiRoutes.delete)
    delete(@Param() id: string) {
        return this.service.delete(id)
    }
}   