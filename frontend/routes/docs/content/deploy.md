# Deploy

## Deploy to Cloudflare

### Prerequisites

Register a [Cloudflare domain](https://www.cloudflare.com/products/registrar/) or have an existing one

### Configure

```bash
bun run infra/configure
```

### Deploy

```bash
bun run infra/deploy
```

## What does this all do?

The configure script itself is all in the repo at [infra/configure.ts](https://github.com/danield9tqh/typescript-start/blob/main/infra/configure.ts). First it configures an Alchemy profile and executes an OAuth login to Cloudflare. More info is available on the [Profiles section](https://alchemy.run/concepts/profiles/) in the Alchemy docs but essentially it creates OAuth credentials for your cloudflare account and stores them in the `~/.alchemy` folder.

After Cloudflare is authenticated it pulls down a list of domains in your Cloudflare account which makes it easier to verify that a domain is already set up and to choose which subdomain.domain to deploy the app to. When the full path e.g. my-app.example.com is chosen it saves that in the .env file

Finally it creates an [Alchemy secret](https://alchemy.run/providers/cloudflare/secret/). The Alchemy secret is used when deploying secret env variables to a Cloudflare worker environment. Lets go through an example, you want to deploy a service that uses a secret API_KEY. When you run `bun deploy` Alchemy takes that secret from the local .env file, sends it to Cloudflare when deploying the service, and stores an encrypted deployment state locally of that API_KEY. The ALCHEMY_PASSWORD is what is used to encrypt that local state.

## What you finally end up with

An Alchemy profile for Cloudflare in your `~/.alchemy` folder. That's username + OAuth credentials. A new local .env file with

```bash
ALCHEMY_PASSWORD=_random_string_
CUSTOM_DOMAIN=subdomain.example.com # whatever you set it to
```
