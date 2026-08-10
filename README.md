# Home Assistant Fitness PWA App Repository

This public repository contains only the Home Assistant app metadata and documentation for Fitness PWA.

The application source remains private in [Amenophus79/FitnessWPA](https://github.com/Amenophus79/FitnessWPA). The app image is published separately as `ghcr.io/amenophus79/fitness-pwa` and is referenced by the Home Assistant app metadata.

## Installation

1. In Home Assistant, open **Settings > Apps > App repositories**.
2. Add `https://github.com/Amenophus79/HA_FitnessWPA` as a repository.
3. Install **Fitness PWA**.
4. Open the app through its configured HTTPS reverse proxy or a trusted local HTTPS endpoint before installing it on iOS.

The app stores its durable local SQLite database in `/data`. If the Home Assistant MariaDB app is installed, `mysql:want` service discovery is used at startup and the SQLite state is migrated or mirrored into the `fitness_pwa_state` table. Without MariaDB, SQLite remains the complete storage backend.

## Scope

This repository intentionally contains no application source, secrets, Supabase configuration, OpenAI prompts, user data, or database credentials.
