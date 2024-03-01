import * as amqp from 'amqplib/callback_api';
import { RabbitMessage } from '../domain/entities';
import { RabbitMQAdapter } from '../domain/services/RabbitMqAdapter';
import dotenv from 'dotenv';

dotenv.config();

const rabbitHost = process.env.RABBIT_HOST || '';

export class CreateRabbitMQAdapter implements RabbitMQAdapter {
  private channel: amqp.Channel | null = null;

  constructor() {
    this.connectToRabbit();
  }

  private connectToRabbit() {
    return new Promise<void>((resolve, reject) => {
      amqp.connect(rabbitHost, (err, connection) => {
        if (err) {
          console.error('Error connecting to RabbitMQ:', err);
          reject(err);
          return;
        }
        connection.createChannel((err, ch) => {
          if (err) {
            console.error('Error creating channel:', err);
            reject(err);
            return;
          }
          this.channel = ch;
          console.log('Connected to RabbitMQ');
          resolve();
        });
      });
    });
  }

  private async ensureChannel() {
    if (!this.channel) {
      await this.connectToRabbit();
    }
    return this.channel;
  }

  public async createRabbitMQAdapter(): Promise<any> {

    return Promise.resolve();
  }

  public async publishToQueue(message: RabbitMessage): Promise<void> {
    const queueName = process.env.QueueName || '';
    const { content } = message;
    const channel = await this.ensureChannel();
    if (!channel) {
      console.error('Channel is not available. Please connect to RabbitMQ first.');
      return;
    }
    channel.assertQueue(queueName, { durable: false });
    channel.sendToQueue(queueName, Buffer.from(content));
    console.log(`Message sent to queue ${queueName}: ${content}`);
  }

  public customFunction = this.x.bind(this);

  private x(queue: string, message: any) {
    if (!this.channel) {
      console.error('Channel is not available. Please connect to RabbitMQ first.');
      return;
    }
    console.log(`Using function x on queue ${queue}:`, message);
  }
}
