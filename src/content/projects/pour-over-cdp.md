---
title: The Pour Over — Mini CDP
description: Full-stack customer data platform for The Pour Over developer assessment — Spring Boot, React, live webhooks, and a Spring AI growth assistant.
pubDate: 2026-10-14
category: microservices
techStack: ['Java', 'Spring Boot', 'Spring AI', 'Spring Security', 'React', 'Vite', 'H2', 'Docker']
githubUrl: https://github.com/johnpranoy7/thePourOverAssesment
liveUrl: https://pourover.johnpranoy7.dev/
featured: true
---

## Overview

A compact customer data platform built for The Pour Over developer assessment. It loads newsletter, web, and app activity from CSV into H2 at startup, then lets you look up a subscriber across those sources, run analytics queries, ingest live app events over a secured webhook, and ask a Spring AI growth assistant that never returns raw emails.

The stack is Spring Boot 3 (Java 17) on the backend and a React (Vite) SPA on the frontend, shipped together in a multi-stage Docker image. Security is first-class: session + CSRF for the UI, Bearer auth for webhooks, PII hashing for AI tools, and optional allowlisted GitHub OAuth for recruiters.

## Key Features

- Subscriber lookup across newsletter, site visits, and app activity
- Analytics queries (e.g. Instagram cold audiences) with masked CSV export
- Live `POST /webhooks/app` with Bearer auth — dedupe, device-link merge, anon→identified attach
- Growth assistant via Spring AI tools that use `subscriber_ref` hashes instead of raw emails
- Growth snapshot home view and a live webhook ticker for demos

## Technical Highlights

- Spring Security with CSRF for cookie sessions and a separate webhook auth path
- PII boundary: HMAC-SHA256 subscriber refs, email redaction in chat, no name-based AI lookup
- SPA baked into the Spring jar (or served from the Docker image) on port 8080
- Backend tests covering merge rules, webhook behavior, rate limiting, and security

## Live Demo

Try the app at [pourover.johnpranoy7.dev](https://pourover.johnpranoy7.dev/).  
(Login credentials are shared privately for recruiters — see the repo’s [RECRUITERS.md](https://github.com/johnpranoy7/thePourOverAssesment/blob/master/RECRUITERS.md).)
