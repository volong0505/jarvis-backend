import { BadRequestException, Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { EventsFactory } from "../../domain/events.factory";
import { EventsRepository } from "../../domain/events.repository";
import { CreateEventCommand } from "../impl/create-event.command";
import { EventInjectionTokenEnum } from "../../events.inject-token";

@CommandHandler(CreateEventCommand)
export class CreateEventHandler implements ICommandHandler<CreateEventCommand> {

    constructor(
        @Inject(EventInjectionTokenEnum.EVENTS_REPOSITORY) private readonly repository: EventsRepository,
        @Inject() private readonly eventsFactory: EventsFactory
    ) {}

    async execute(command: CreateEventCommand): Promise<any> {
        try {
            const { dto } = command;
            const event = this.eventsFactory.create(dto);

            await this.repository.saveOne(event)
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

}