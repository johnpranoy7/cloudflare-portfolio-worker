---
title: Spectrum-Based Fault Localization (SBFL)
description: Java Maven plugin automating fault detection using Tarantula and Ochiai formulas with PITest mutation testing.
pubDate: 2024-10-01
techStack: ['Java', 'Maven', 'PITest', 'JUnit', 'SBFL']
githubUrl: https://github.com/johnpranoy7/JFreeSBFL
featured: true
---

## Overview

Graduate Research Assistant project at Kennesaw State University (Aug – Dec 2025). Implemented spectrum-based fault localization (Tarantula, Ochiai) in Java to automate fault detection across large-scale codebases, with ranked reports estimated to cut debugging time by ~40%.

## Key Features

- **SBFL algorithms** — Implemented Tarantula and Ochiai formulas for ranking suspicious code locations
- **Maven plugin** — Integrates PITest mutation testing with SBFL formulas, fully automating fault analysis for multi-module Java projects
- **CSV reports** — Generates ranked reports of suspicious code locations for developer review

## Technical Highlights

- Built as a reusable Maven plugin for multi-module Java projects
- Combines mutation testing coverage data with spectrum-based formulas
- Designed for integration into existing CI pipelines

## Outcome

Automated fault analysis that cuts estimated debugging time by ~40% for complex Java codebases.
