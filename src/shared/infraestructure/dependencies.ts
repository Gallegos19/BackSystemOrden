import { NotificationUseCase } from "../aplication/service/Notication";
import { CreateRabbitMQAdapter } from "./RabbitMq.adapter";

export const servicesNotification = new CreateRabbitMQAdapter();


export const serviceNotificationUseCase = new NotificationUseCase(
    servicesNotification
  )