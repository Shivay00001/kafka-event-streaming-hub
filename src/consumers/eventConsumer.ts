import { Kafka, Consumer, EachBatchPayload } from 'kafkajs';
import { config } from '../config';
import pino from 'pino';

const logger = pino({ level: config.logLevel });

export class EventConsumer {
    private consumer: Consumer;

    constructor(groupId: string) {
        const kafka = new Kafka({
            clientId: config.kafka.clientId,
            brokers: config.kafka.brokers,
        });
        this.consumer = kafka.consumer({ groupId });
    }

    async connect() {
        logger.info('Connecting consumer...');
        await this.consumer.connect();
        logger.info('Consumer connected');
    }

    async subscribe(topic: string) {
        await this.consumer.subscribe({ topic, fromBeginning: true });
        logger.info(`Subscribed to topic ${topic}`);
    }

    async run() {
        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                logger.info({
                    topic,
                    partition,
                    offset: message.offset,
                    value: message.value?.toString(),
                }, 'Received message');

                // Add business logic here
            },
        });
    }

    async disconnect() {
        await this.consumer.disconnect();
        logger.info('Consumer disconnected');
    }
}
