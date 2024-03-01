import { RabbitMessage } from "../entities/RabbitMessage";
export interface RabbitMQAdapter {
  createRabbitMQAdapter(): Promise<any>;
  publishToQueue(message: RabbitMessage): void;
}