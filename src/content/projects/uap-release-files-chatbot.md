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

An AI-powered chatbot built to help users query and understand UAP release files. Uses retrieval-augmented generation to surface accurate answers from release documentation instead of relying on generic LLM responses. Also we have an integration to an external API (Nasa APOD). This demo project is built to showcase that Spring AI can handle RAG + Tool Calling behaviour depending on users Prompt. It can even smartly understand and call the relevant tools even if they need to be chained to assist the users question.

## Key Features

- Document-grounded Q&A over release files
- Spring Boot backend with Spring AI integration
- RAG and similarlity search for answering questions related to Release Files
- Tool Calling Integration to external APIs (Nasa Picture of the Day)
- Deployed live on Cloudflare for interactive demos

## Live Demo

Try the chatbot at [uapchatbot.johnpranoy7.dev/](https://uapchatbot.johnpranoy7.dev/).
