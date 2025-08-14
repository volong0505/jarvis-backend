export class SearchEventsRequest {
    keywords?: string;
    lastDaysNumber?: number;
}

export class SearchEventsResponse {
    data!: EventList_ItemDTO[]
}

export class EventList_ItemDTO {
    _id!: string;
    type!: string;
    title!: string;
    date!: Date;
    location!: string;
    time_start!: string;
    document!: string;
    link!: string;
    description!: string;
    color!: string;
}