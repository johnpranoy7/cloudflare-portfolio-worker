---
title: Healthcare HL7 FHIR Client
description: Full-stack FHIR client for browsing, searching, and interacting with healthcare resources via the HL7 FHIR standard.
pubDate: 2024-08-01
category: microservices
techStack: ['Java', 'Spring Boot', 'HL7 FHIR', 'REST', 'React', 'Cloudflare']
githubUrl: https://github.com/johnpranoy7/FHIR-Client
liveUrl: https://fhir.johnpranoy7.dev/
featured: true
---

## Overview

A healthcare interoperability project implementing an HL7 FHIR client — enabling standardized access to patient, observation, and clinical resources through the FHIR REST API. This small POC walks through the happy path from patient search to document download against a remote FHIR server (another hospital).

I had a conversation with someone in the healthcare field and we discussed a few things regarding architecture. Honestly, I didn't know much about medical records or how they are maintained. Over the next few days, I researched what HL7 is and which standards are in use today. After that, I wanted to build an app that could retrieve documents from a remote FHIR server — this project became a hands-on way to learn healthcare interoperability while showcasing that end-to-end flow.

## Key Features

- FHIR-compliant resource browsing and search
- Spring Boot backend integrating with FHIR servers
- Interactive web UI deployed on Cloudflare

## Live Demo

Explore the client at [fhir.johnpranoy7.dev](https://fhir.johnpranoy7.dev/).
