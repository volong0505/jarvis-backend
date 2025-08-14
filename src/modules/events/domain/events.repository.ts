import { EventModel } from "../domain";

export interface EventsRepository {
    findOne: (id: string) => Promise<EventModel>;
    saveOne: (event: EventModel) => Promise<void>;
    delete: (id: string) => Promise<void>;
}