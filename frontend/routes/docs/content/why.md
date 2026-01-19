# Why?

Design principles and priorities.

I built this app for myself to be a quick starter app that would be scalable for 90% of my projects. The learnings come from working on full stack JS/TS apps for the last ~10 years.

## Avoiding Config Hell

Put as much config into typescript code as possible. Having as much logic as possible in a single language allows:

- Better interoperability between all logic
- Consistent typechecking across different parts of the stack like frontend, backend, DB schema, infrastructure and any other code

## Modularity

Frontend and Backend should be able to evolve separately. No vendor lockin, the core stack can be deployed to many different environments.

- Hono backend can be deployed to pretty much any serverless infra framework
- Frontend just creates a simple JS/HTML/CSS bundle which can be hosted anywhere

## Scalability

As your app evolves you shouldn't be hit with high usage bills from services that only provide good free tier pricing but then expensive scaling. Cloudflare seems to offer a good middle ground between simplicity (compared to AWS) and price (compared to Vercel). All services, including D1 database, can be scaled to 0 so no worrying about ongoing cost for unused apps.
