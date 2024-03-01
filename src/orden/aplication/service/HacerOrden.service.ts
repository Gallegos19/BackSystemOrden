import { NotificationUseCase } from "../../../shared/aplication/service/Notication";
import { Orden } from "../../domain/entities/orden";
import { RabbitMessage } from "../../../shared/domain/entities";

export class CrearOrden {
  constructor(private readonly sendNotification: NotificationUseCase) {}
  async run(orden: Orden): Promise<Orden> {
    try {
        
        const rabbitMessage: RabbitMessage = {
            content: (JSON.stringify(orden)), // Suponiendo que response es lo que quieres enviar
            // Puedes añadir más propiedades según lo requiera RabbitMessage
          };
          console.log(rabbitMessage);
      await this.sendNotification.run(rabbitMessage);
      return orden;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
