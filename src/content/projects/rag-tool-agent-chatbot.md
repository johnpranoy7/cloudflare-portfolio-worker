---
title: AI-Powered RAG Chatbot with Tool Calling
description: Production-grade conversational AI using Spring AI, RAG, and agentic tool-calling — deployed end-to-end on AWS.
pubDate: 2025-05-01
techStack: ['Spring AI', 'Spring Boot', 'React', 'pgvector', 'Pinecone', 'Docker', 'AWS']
githubUrl: https://github.com/johnpranoy7/RagToolAgentChatbot
featured: true
---

## Overview

Master's capstone at Kennesaw State University — a production-grade conversational AI system that goes beyond static Q&A. It retrieves context via RAG, evaluates response faithfulness with an LLM-as-Judge layer to cut down on hallucinations, and autonomously invokes external REST APIs through tool-calling based on user intent.

Not a notebook demo — a full Spring Boot + React application, containerized with Docker and deployed on AWS.

## Key Features

- **RAG pipeline** — Vector embedding pipeline with pgvector and Pinecone for semantic search across large document corpora with sub-second retrieval
- **LLM-as-Judge** — Automatic scoring and filtering of responses for faithfulness, reducing hallucinations
- **Tool calling** — Agentic function calling transforms the chatbot into an action-capable AI agent
- **Full production stack** — Spring Boot backend, React frontend, Docker containerization, and AWS deployment

## Technical Highlights

- Designed high-throughput vector embedding pipeline for large document corpora
- Engineered tool-calling so the chatbot invokes external REST APIs based on user intent
- Built and shipped end-to-end — not a notebook prototype

## Outcome

Addresses a core reliability gap in enterprise AI adoption by measurably reducing hallucinations through automated response evaluation.
