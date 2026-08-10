# Fitness PWA

Fitness PWA is an offline-first training planner. Its source code is maintained privately in `Amenophus79/FitnessWPA`; this public repository contains only the Home Assistant app integration.

## Storage

The app uses `/data/fitness-pwa.sqlite` as its durable local database. The app is configured with `backup: cold`, so Home Assistant stops it during backups and includes the database consistently.

When a MariaDB provider is available, the app uses Home Assistant's `/services/mysql` service discovery through `SUPERVISOR_TOKEN`. The SQLite state is reconciled with the `fitness_pwa_state` table. The SQLite mirror remains available if MariaDB is temporarily unavailable.

## Network and iOS

The app exposes port 3000. For iPhone/iPad installation, serve it through a stable HTTPS origin. Home Assistant ingress can be used for the dashboard, but a stable HTTPS URL is recommended for a persistent iOS Service Worker scope.

## Support

Report application issues in the private source project. Report metadata or installation issues in this repository.
