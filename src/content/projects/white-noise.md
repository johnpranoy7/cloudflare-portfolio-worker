---
title: Whitenoise
description: Browser-based noise and nature sounds for focus and sleep — synthesised live with the Web Audio API, no backend required.
pubDate: 2026-11-01
category: games
techStack: ['React', 'TypeScript', 'Vite', 'Web Audio API', 'PWA', 'Docker']
githubUrl: https://github.com/johnpranoy7/white-noise
liveUrl: https://whitenoise.johnpranoy7.dev/
featured: true
---

## Overview

Whitenoise is a focus and sleep sound app that generates noise and nature sounds live in the browser. There are no looping audio files for the noise colors — blue, white, grey, pink, green, brown, and deep brown are synthesised in an AudioWorklet, so the sound never repeats. Nature sounds (rain, stream, ocean, breeze, underwater, campfire, and crickets) are synthesised by default, with the option to swap in CC0 recordings.

I built it as a small, installable PWA with no backend: React + TypeScript + Vite, the raw Web Audio API, and Zustand for state. Playback keeps going with the phone locked (Media Session), and the whole site ships as a lightweight non-root nginx container.

## Key Features

- Seven noise colors generated in an AudioWorklet — no sample files, never loops
- Soft nature sounds tuned for sleep, with optional recording overrides
- One sound at a time, with crossfades and keyboard shortcuts (`Space`, `1`–`7`, `Q`–`U`)
- Sleep timer that fades out gradually, plus a focus timer (25/5 or 50/10) that ducks volume on breaks
- Installable PWA with lock-screen media controls for background playback

## Technical Highlights

- Web Audio graph with master, duck, sleep-fade, and limiter stages
- S-curve fades that start from the current level so switching sounds never jumps
- Final hop through an `<audio>` element for reliable iOS background playback
- Multi-arch Docker image (`amd64` + `arm64`) served by unprivileged nginx on port 8080

## Live Demo

Try it at [whitenoise.johnpranoy7.dev](https://whitenoise.johnpranoy7.dev/).
