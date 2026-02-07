import { Kafka, Producer, Message } from 'kafkajs';
import { config } from '../config';
import pino from 'pino';

const logger = pino({ level: config.logLevel });

export class EventProducer {
    private producer: Producer;

    constructor() {
        const kafka = new Kafka({
            clientId: config.kafka.clientId,
            brokers: config.kafka.brokers,
        });
        this.producer = kafka.producer({
            idempotent: true,
            maxInFlightRequests: 1,
        });
    }

    async connect() {
        logger.info('Connecting producer...');
        await this.producer.connect();
        logger.info('Producer connected');
    }

    async disconnect() {
        await this.producer.disconnect();
        logger.info('Producer disconnected');
    }

    async send(topic: string, messages: Message[]) {
        try {
            await this.producer.send({
                topic,
                messages,
            });
            logger.info(`Sent ${messages.length} messages to topic ${topic}`);
        } catch (error) {
            logger.error('Error producing message', error);
            throw error;
        }
    }
}
