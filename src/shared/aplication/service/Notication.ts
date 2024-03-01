import { RabbitMessage } from "../../domain/entities";
import { CreateRabbitMQAdapter } from "../../infraestructure/RabbitMq.adapter";

export class NotificationUseCase{
    constructor(readonly notification: CreateRabbitMQAdapter){}

    async run(msg:RabbitMessage){
        await this.notification.publishToQueue(msg)
    }
}