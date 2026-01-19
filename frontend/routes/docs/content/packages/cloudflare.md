# Cloudflare

Production infrastructure.

[Cloudflare](https://www.cloudflare.com/) provides the production infrastructure: Workers for serverless compute, D1 for the database, and Pages for static hosting.

## Scalability

As your app evolves you shouldn't be hit with high usage bills from services that only provide good free tier pricing but then expensive scaling. Cloudflare seems to offer a good middle ground between simplicity (compared to AWS) and price (compared to Vercel). All services, including D1 database, can be scaled to 0 so no worrying about ongoing cost for unused apps.
