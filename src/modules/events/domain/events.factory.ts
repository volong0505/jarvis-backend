import { Inject } from "@nestjs/common";
import { EventPublisher } from "@nestjs/cqrs";
import { EventModel, EventImplement, EventsProperties } from "./events";

type CreateEventsOptions = Readonly<{
    _id: string;
    type: string;
    title: string;
    date: Date;
    location: string;
    time_start: string;
    document: string;
    link: string;
    description: string;
    color: string;
    createAt: Date;
    updateAt: Date;
}>

export class EventsFactory {
    @Inject(EventPublisher) private readonly eventPublisher!: EventPublisher;

    create(options: CreateEventsOptions): EventModel {
        return this.eventPublisher.mergeObjectContext(
            new EventImplement({
                ...options,
                createAt: new Date(),
                updateAt: new Date(),
                deleteAt: null
            })
        )
    }

    reconstitute(properties: EventsProperties): EventModel {
        return new EventImplement(properties)
    }
}