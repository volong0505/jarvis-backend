import { EventsQuery } from "../../queries/events.query";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SearchEventsRequest } from "../../dto";
import { Events } from "../../schema/events.schema";

export class EventsQueryImpl implements EventsQuery  {
    constructor(
        @InjectModel(Event.name) private readonly model: Model<Events>
    ) {}

    async findOne(id: string): Promise<Events> {
        return await this.model.findById(id) as Events;
    }

    async findAll(params: SearchEventsRequest): Promise<Events[]> {
        const { lastDaysNumber} = params;
        const dateCondition = lastDaysNumber ?  { "date" :  { $gte: new Date(),  $lte: new Date(new Date().getTime() + (lastDaysNumber * 24 * 60 * 60 * 1000))} } : null;

        return await this.model.find(
            {
                deleteAt: null,
                ...dateCondition
            }
        );
    }
    
}