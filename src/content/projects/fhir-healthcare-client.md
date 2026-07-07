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

A healthcare interoperability project implementing a HL7 FHIR client — enabling standardized access to patient, observation, and clinical resources through the FHIR REST API. 

I had a conversation with someone from the Medical domain and we discussed a few things regarding architecture. Honestly, I didn't have much idea about Medical records or how they are maintained. So the next few days I spent some time trying to understand what HL7 is and what are the different types/standards currently being used. After going through the details, I wanted to build an app that can retrieve the documents from a server(another hospital). So this app is a small POC built to showcase the happypath - from Patient search to their document download. 

## Key Features

- FHIR-compliant resource browsing and search
- Spring Boot backend integrating with FHIR servers
- Interactive web UI deployed on Cloudflare

## Live Demo

Explore the client at [fhir.johnpranoy7.dev](https://fhir.johnpranoy7.dev/).
