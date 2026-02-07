import { EventProducer } from './producers/eventProducer';
import { EventConsumer } from './consumers/eventConsumer';
import { config } from './config';

async function bootstrap() {
    const producer = new EventProducer();
    const consumer = new EventConsumer('hub-group');

    await producer.connect();
    await consumer.connect();

    await consumer.subscribe(config.topics.userEvents);

    // Start consumer
    consumer.run().catch(console.error);

    // Simple heartbeat production
    setInterval(async () => {
        try {
            await producer.send(config.topics.userEvents, [
                { value: JSON.stringify({ type: 'HEARTBEAT', timestamp: Date.now() }) },
            ]);
        } catch (err) {
            // Handle production errors
        }
    }, 10000);
}

bootstrap().catch(console.error);
