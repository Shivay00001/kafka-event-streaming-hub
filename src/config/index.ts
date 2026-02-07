import dotenv from 'dotenv';
dotenv.config();

export const config = {
    kafka: {
        clientId: process.env.KAFKA_CLIENT_ID || 'event-hub',
        brokers: (process.env.KAFKA_BROKERS || 'localhost:9092').split(','),
    },
    topics: {
        userEvents: 'user-events',
        systemAlerts: 'system-alerts',
    },
    logLevel: process.env.LOG_LEVEL || 'info',
};
