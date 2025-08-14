import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { EventsFactory, EventModel, EventsProperties } from "../domain";
import { Events } from "../schema/events.schema";
@Injectable()
export class EventsRepository {

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