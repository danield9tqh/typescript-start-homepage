# Hono

[Hono](https://hono.dev/) powers the backend with Zod validation and a type-safe client. It can be deployed to pretty much any serverless infrastructure.

- Support Websockets
  - Hono supports ws through upgrading HTTP requests. The code is pretty clean and works for most of my use cases right now
- Compatible with Validation Lib
  - Hono works decently well with Zod for request validation
- Typesafe Client
  - Although I don't think Hono's frontend client is the best (I like tRPC a little more for example) I think it's good enough and at least provides the type safety.
- Easily deploy serverless functions
  - In order to scale backend calls to 0 and save money, I wanted to be able to easily import a top level server with routes and deploy it in serverless. This is easy to do with Hono and Cloudflare workers but Hono also seems to have pretty good support across serverless providers like AWS Lmabda, Fly.io etc. You know, just in case Cloudflare doesn't work out.
- Good Library Momentum
  - I see Hono getting good support across the Typescript community. It's open source. It's supported in part by a big company, [Cloudflare](https://blog.cloudflare.com/the-story-of-web-framework-hono-from-the-creator-of-hono/). All these things tell a compelling story for continued use and support.

As well as supporting all the functional requirements. Using it for a while I also just like the library and syntax compared to things I've used in the past
