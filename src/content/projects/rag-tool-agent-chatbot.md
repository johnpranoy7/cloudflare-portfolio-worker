---
title: Spring AI RAG + Tool-Calling Chatbot
description: Conversational AI with RAG, agentic tool-calling, and an LLM-as-Judge layer to minimize hallucinations.
pubDate: 2025-05-01
category: ai
techStack: ['Spring AI', 'Spring Boot', 'React', 'pgvector', 'Pinecone', 'Docker', 'AWS']
githubUrl: https://github.com/johnpranoy7/RagToolAgentChatbot
featured: true
---

## Overview

Master's capstone at Kennesaw State University — a production-grade conversational AI system that retrieves context via RAG, evaluates response faithfulness with an LLM-as-Judge layer, and autonomously invokes external REST APIs through tool-calling based on user intent. Source code is available on GitHub

## Key Features

- **RAG pipeline** — Vector embeddings with pgvector and Pinecone for semantic search across large document corpora
- **LLM-as-Judge** — Scores and filters responses for faithfulness to reduce hallucinations
- **Tool calling** — Agentic function calling turns the chatbot into an action-capable AI agent
- **Full stack** — Spring Boot backend, React frontend, Docker, and AWS deployment

## Outcome

Addresses a core reliability gap in enterprise AI adoption by measurably reducing hallucinations through automated response evaluation.
