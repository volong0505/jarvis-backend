import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { DeleteEventCommand } from "../impl/delete-event.comand";
import { BadRequestException, Inject } from "@nestjs/common";
import { EventsFactory } from "../../domain/events.factory";
import { EventsRepository } from "../../domain/events.repository";
import { EventInjectionTokenEnum } from "../../events.inject-token";

@CommandHandler(DeleteEventCommand)
export class DeleteEventHandler implements ICommandHandler<DeleteEventCommand> {

     constructor(
            @Inject(EventInjectionTokenEnum.EVENTS_REPOSITORY) private readonly repository: EventsRepository,
            @Inject() private readonly eventsFactory: EventsFactory
        ) {}

    async execute(command: DeleteEventCommand): Promise<any> {
        try {
            const { id } = command;
            await this.repository.delete(id)
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

}