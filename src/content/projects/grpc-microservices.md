---
title: gRPC Microservices Stack
description: Distributed system with a gRPC server, Java client, and Angular UI — demonstrating high-performance RPC across services.
pubDate: 2024-04-01
category: microservices
techStack: ['gRPC', 'Java', 'Angular', 'Protocol Buffers', 'Microservices', 'Cloudflare']
githubUrl: https://github.com/johnpranoy7/grpc-server
liveUrl: https://grpc.johnpranoy7.dev/
additionalGithubUrls:
  - label: gRPC Client
    url: https://github.com/johnpranoy7/grpc-client
  - label: Angular UI
    url: https://github.com/johnpranoy7/grpc-Angular-ui
featured: true
---

## Overview

A multi-repo microservices demonstration using gRPC for efficient binary communication between a Java server, Java client, and Angular frontend. gRPC and Protocol Buffers offer lower-latency, strongly typed service contracts compared to JSON REST — a good fit for service-to-service calls.

I built this mainly to showcase the different communication modes gRPC supports — unary, server streaming, client streaming, and bidirectional streaming. The server app exposes gRPC endpoints that are consumed by the Java client app, which in turn acts as the backend-for-frontend for the Angular UI. The Angular app makes these interactions visual, so others can see and learn how gRPC works in practice.

## What is gRPC?

gRPC is a high-performance, open-source RPC (Remote Procedure Call) framework originally from Google. It lets a client call a method on a server as if it were a local function. Under the hood it runs over **HTTP/2** and serializes messages with **Protocol Buffers** — a compact, strongly-typed binary format defined in a shared `.proto` contract from which both client and server code are generated.

## Why gRPC after HTTP/1 REST?

REST over HTTP/1.1 with JSON is simple, universal, and great for public, browser-facing, cacheable APIs. But for internal, high-throughput service-to-service communication it carries real costs that gRPC addresses:

- **Transport** — gRPC uses **HTTP/2**: a single connection multiplexes many concurrent calls with binary framing and header compression, avoiding HTTP/1's head-of-line blocking and connection churn.
- **Payloads** — **Protocol Buffers** encode to a compact binary form that is faster to serialize/deserialize and smaller on the wire than JSON text.
- **Contracts** — The `.proto` file is a single, strongly-typed source of truth. Stubs are generated for every language, eliminating contract drift and most hand-written DTO/mapping code.
- **Streaming** — Streaming is a first-class primitive in the protocol, not something bolted on with SSE or WebSocket workarounds.

The trade-off: gRPC isn't natively consumable by browsers and is harder to debug by hand than JSON. That's exactly why this project puts a **REST / SSE / WebSocket BFF** (the Java client) in front of the browser and speaks **gRPC** behind it — using each protocol where it's strongest.

## The Four Communication Patterns

| Pattern | Shape | Example in this demo |
|---------|-------|----------------------|
| **Unary** | 1 request → 1 response | Fetch a single student profile |
| **Server streaming** | 1 request → many responses | Stream the course catalog as it loads |
| **Client streaming** | many requests → 1 response | Batch-enroll students, get one summary back |
| **Bidirectional streaming** | many ↔ many | Live enrollment advising chat |

Each pattern maps to a tab in the [live demo](https://grpc.johnpranoy7.dev/), so you can watch the messages flow in real time.

## Repositories

| Component | Role |
|-----------|------|
| [grpc-server](https://github.com/johnpranoy7/grpc-server) | gRPC service definitions and server implementation |
| [grpc-client](https://github.com/johnpranoy7/grpc-client) | Java client consuming the gRPC service |
| [grpc-Angular-ui](https://github.com/johnpranoy7/grpc-Angular-ui) | Angular frontend interfacing with the backend |

## Technical Highlights

- Protocol Buffers for strongly typed, auto-generated service contracts
- All four gRPC communication patterns demonstrated with a real domain model
- BFF pattern bridging browser (HTTP/SSE/WebSocket) to internal gRPC services
- Full-stack integration: Angular UI → Spring Boot BFF → gRPC server → H2 database
- Dockerized and deployed via Portainer with Cloudflare Tunnel for public access

## Live Demo

Try the demo at [grpc.johnpranoy7.dev](https://grpc.johnpranoy7.dev/).