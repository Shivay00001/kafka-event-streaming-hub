# Kafka Event Streaming Hub

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Kafka](https://img.shields.io/badge/Kafka-3.x-blue.svg)](https://kafka.apache.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A **production-grade event streaming hub** built with Node.js and Kafkajs. This repository provides a scalable framework for event-driven architectures, featuring robust producers, consumers, and topic management.

## 🚀 Features

- **Scalable Producers**: High-throughput message production with retry logic and idempotency.
- **Robust Consumers**: Consumer groups with horizontal scaling and automatic offset management.
- **Event Schema**: Strong typing for event payloads using TypeScript.
- **Dead Letter Queues**: Error handling with DLQ patterns for failed message processing.
- **Topic Management**: Automated topic creation and configuration.
- **Containerized**: Integrated Kafka and Zookeeper setup via Docker Compose.

## 📁 Project Structure

```
kafka-event-streaming-hub/
├── src/
│   ├── producers/    # Message production logic
│   ├── consumers/    # Message subscription and processing
│   ├── config/       # Kafka and application configuration
│   ├── types/        # Event definitions and types
│   └── index.ts      # Application entrypoint
├── tests/            # Unit and integration tests
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## 🛠️ Quick Start

```bash
# Clone
git clone https://github.com/Shivay00001/kafka-event-streaming-hub.git

# Install
npm install

# Run (Local with Docker)
docker-compose up -d
npm run dev
```

## 📄 License

MIT License
