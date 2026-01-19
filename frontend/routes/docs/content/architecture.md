# Architecture

Overview of the starting application architecture and how I expect my projects to evolve

## Frontend is a Bundle

We'll see if I regret this decision with the recent resurgence of SSR but I think bundling frontend assets into HTML, JS and CSS and hosting them on a CDN is a pretty stable concept. That's why if you look into both dev.tsx and infra/index.tsx they both bundle the frontend into an entry point.
