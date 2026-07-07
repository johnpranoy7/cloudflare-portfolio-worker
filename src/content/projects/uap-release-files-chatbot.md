---
title: UAP Release Files Chatbot
description: AI chatbot for querying and navigating UAP release documentation with RAG-powered answers.
pubDate: 2025-03-15
category: ai
techStack: ['Spring AI', 'Spring Boot', 'RAG', 'React', 'Cloudflare']
githubUrl: https://github.com/johnpranoy7/UapReleaseFilesChatbot
liveUrl: https://uapchatbot.johnpranoy7.dev/
featured: true
---

## Overview

An AI-powered chatbot built to help users query and understand UAP (Unidentified Aerial Phenomena) release files — government release batches that are dense and hard to navigate manually. Uses retrieval-augmented generation to surface accurate answers from release documentation instead of relying on generic LLM responses.

It also integrates with an external API (NASA APOD). This demo project showcases Spring AI handling RAG and tool calling based on the user's prompt — including chaining multiple tools when needed to answer a single question.

## Key Features

- Document-grounded Q&A over release files
- Spring Boot backend with Spring AI integration
- RAG and similarity search for answering questions related to release files
- Tool calling integration with external APIs (NASA Picture of the Day)
- Deployed live on Cloudflare for interactive demos

## Live Demo

Try the chatbot at [uapchatbot.johnpranoy7.dev/](https://uapchatbot.johnpranoy7.dev/).
