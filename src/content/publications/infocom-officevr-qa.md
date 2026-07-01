---
title: RAG-Driven 3D Question Answering in Edge-Assisted Virtual Reality
description: OfficeVR-QA — an edge-assisted VR framework that uses retrieval-augmented generation for accurate, context-aware 3D question answering in virtual environments.
venue: 'IEEE INFOCOM 2025 Workshop'
pubDate: 2025-09-12
paperUrl: https://ieeexplore.ieee.org/document/11152992
---

## Abstract

The rapid development of large language models (LLMs) has created new opportunities in 3D question answering (3D-QA) for virtual reality (VR). 3D-QA enhances user interaction by answering questions about virtual environments. However, performing 3D-QA in VR systems using LLM-based approaches is computation-intensive. Furthermore, general LLMs tend to generate inaccurate responses as they lack context-specific information in VR environments.

## OfficeVR-QA Framework

To mitigate these limitations, we propose **OfficeVR-QA**, a 3D-QA framework for edge-assisted VR to alleviate the resource constraints of VR devices with the help of edge servers, demonstrated in a virtual office environment.

To improve the accuracy of the generated answers, the edge server of OfficeVR-QA hosts retrieval-augmented generation (RAG) that augments LLMs with external knowledge retrieved from a local knowledge database extracted from VR environments and users.

## Interactive Demo

During an interactive demo, OfficeVR-QA will:

- Continuously update the local knowledge database in real time by transmitting participants' position and orientation data to the edge server
- Enable adaptive responses to changes in the participants' states
- Let participants navigate a VR office environment and interact with a VR user interface to ask questions
- Demonstrate the accuracy of dynamic responses based on real-time state changes

## Venue

Presented at the **IEEE INFOCOM 2025 Workshop** — September 12, 2025.
