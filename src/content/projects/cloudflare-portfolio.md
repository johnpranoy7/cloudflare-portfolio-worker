---
title: Cloudflare Portfolio
description: Edge-deployed personal portfolio built with Astro and Cloudflare Workers.
pubDate: 2025-06-01
category: research
techStack: ['Astro', 'TypeScript', 'Cloudflare Workers']
githubUrl: https://github.com/johnpranoy7/cloudflare-portfolio-worker
featured: false
---

## Overview

This portfolio site is deployed globally on Cloudflare's edge network at [johnpranoy7.dev](https://johnpranoy7.dev). It centralizes my projects, publications, and live demo links in one place.

I initially deployed demos on Render's free tier, but cold starts and slow response times made for a poor experience. After some research, I moved to self-hosting on a home server and exposing each app through Cloudflare Tunnels — FHIR, the UAP chatbot, gRPC, and others each get their own subdomain. Project write-ups and demo links live here in this Astro app.

## Key Features

- Grouped projects, publications, and experience timeline
- Live demo links for deployed projects across custom subdomains
- Edge-deployed on Cloudflare Workers with Astro and TypeScript
