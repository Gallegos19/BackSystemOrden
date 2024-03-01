import { NotificationUseCase } from "../../shared/aplication/service/Notication";
import { CrearOrden } from "../aplication/service/HacerOrden.service";
import { CrearOrdenController } from "./controller/crearOrden.controller";
import { CreateRabbitMQAdapter } from "../../shared/infraestructure/RabbitMq.adapter";


const servicesNotification = new CreateRabbitMQAdapter();
const serviceNotificationUseCase = new NotificationUseCase(
    servicesNotification
  )

export const createOrderService = new CrearOrden(
  serviceNotificationUseCase
);
export const createOrden=  new CrearOrdenController(
    createOrderService
)

