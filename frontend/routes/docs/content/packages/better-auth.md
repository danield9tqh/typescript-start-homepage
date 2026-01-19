# Better Auth

Authentication powered by BetterAuth.

[BetterAuth](https://www.better-auth.com/) is an open source library that handles a large number of auth use cases and doesn't rely on any external services. The implementation in this project does sign up and login with just passkeys. The BetterAuth instance relies on a self hosted SQLite database.

In dev that's a SQLite file accessed through Bun.sql and when deployed to Cloudflare it's a Cloudflare D1 instance that's created on deploy.
