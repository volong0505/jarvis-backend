import { AggregateRoot } from "@nestjs/cqrs";

export type EventsEssentialProperties = Readonly<
    Required <{
        _id: string;
        type: string;
        title: string;
        date: Date;
    }>
>

export type EventOptionalProperies = Readonly<
    Partial<{
        location: string;
        time_start: string;
        document: string;
        link: string;
        description: string;
        color: string;
        createAt: Date;
        updateAt: Date;
        deleteAt: Date | null;
    }>
>;

export type EventsProperties = EventsEssentialProperties & Required<EventOptionalProperies>;

export interface EventModel {
    restore: () => void;
    commit: () => void;
}

export class EventImplement extends AggregateRoot implements EventModel {
    _id!: string
    title!: string;
    date!: string;
    location!: string;
    time_start!: string;
    document!: string;
    link!: string;
    description!: string;
    createAt!: Date;
    updateAt!: Date;

    constructor(propertis: EventsProperties) {
        super();
        Object.assign(this, propertis)
    }

    restore!: () => void;
}
