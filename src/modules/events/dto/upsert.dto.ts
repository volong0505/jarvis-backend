import { IsNotEmpty } from "class-validator";

export class UpsertEventRequest {
    _id!: string | null;
    @IsNotEmpty()
    type!: string;

    @IsNotEmpty()
    title!: string;
    location!: string;

    @IsNotEmpty()
    date!: Date;
    
    time_start!: string | null;
    link!: string;
    description!: string
    color!: string
}