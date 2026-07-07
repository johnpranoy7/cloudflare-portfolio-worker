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

## Repositories

| Component | Role |
|-----------|------|
| [grpc-server](https://github.com/johnpranoy7/grpc-server) | gRPC service definitions and server implementation |
| [grpc-client](https://github.com/johnpranoy7/grpc-client) | Java client consuming the gRPC service |
| [grpc-Angular-ui](https://github.com/johnpranoy7/grpc-Angular-ui) | Angular frontend interfacing with the backend |


## Technical Highlights

- Protocol Buffers for strongly typed service contracts
- Low-latency RPC compared to REST for service-to-service calls
- Full-stack integration from Angular UI through gRPC to Java services

## Live Demo

Try the demo at [grpc.johnpranoy7.dev](https://grpc.johnpranoy7.dev/).