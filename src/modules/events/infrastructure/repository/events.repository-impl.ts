import { InjectModel } from "@nestjs/mongoose";
import { EventsRepository } from "../../domain/events.repository";
import { Model, Types } from "mongoose";
import { EventsFactory } from "../../domain/events.factory";
import {  EventModel, EventsProperties } from "../../domain/events";
import { Events  } from "../../schema/events.schema";

export class EventsRepositoryImpl implements EventsRepository {

    constructor(
        @InjectModel(Event.name) private readonly model: Model<Events>,
        private readonly factory: EventsFactory
    ) {}

    async findOne(id: string):  Promise<EventModel> {
        const entity = await this.model.findById(id);
        return entity ? this.entityToModel(entity) : { } as EventModel
    }

    async saveOne(event: EventModel): Promise<void> {
        const entity = this.modelToEntity(event);
        await this.model.findOneAndUpdate(
            {
                _id: entity._id ||  new Types.ObjectId(),
            },
            entity,
            {
                upsert: true
            }
        )
    }

    async delete(id: string): Promise<void> {
        await this.model.findByIdAndUpdate(new Types.ObjectId(id), { deleteAt: new Date()});
    }


    private entityToModel(entity: Events): EventModel {
        return this.factory.reconstitute({
            ...entity,
            _id: entity._id.toString()
        })
    }

    private modelToEntity(model: EventModel): Events {
        const properties = JSON.parse(
            JSON.stringify(model)
        ) as EventsProperties

        return { ...properties, _id: new Types.ObjectId(properties._id)}
    }
} 