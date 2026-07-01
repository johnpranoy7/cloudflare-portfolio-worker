---
title: gRPC Microservices Stack
description: Distributed system with a gRPC server, Java client, and Angular UI — demonstrating high-performance RPC across services.
pubDate: 2024-04-01
category: microservices
techStack: ['gRPC', 'Java', 'Angular', 'Protocol Buffers', 'Microservices']
githubUrl: https://github.com/johnpranoy7/grpc-server
additionalGithubUrls:
  - label: gRPC Client
    url: https://github.com/johnpranoy7/grpc-client
  - label: Angular UI
    url: https://github.com/johnpranoy7/grpc-Angular-ui
featured: false
---

## Overview

A multi-repo microservices demonstration using gRPC for efficient binary communication between a Java server, Java client, and Angular frontend.

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
