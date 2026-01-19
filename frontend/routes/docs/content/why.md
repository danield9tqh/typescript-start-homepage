# Why?

I built this app for myself to be a quick starter app that would be scalable for 90% of my projects. The learnings come from working on full stack JS/TS apps for the last ~10 years. Here's a non-comprehensive list of principles I followed for selecting the stack.

## Libraries > Services

External services can be great if they do something that you can't do on your own either because its too complicated or too expensive. Some service categories are mature enough that we no longer need other people to host them for us. Think services like Databases (Supabase) Authentication (Clerk, Auth0), They may be easier up front but they come with hidden costs that bite you later on. Here's a few I've found that make libraries easier to deal with than services

### Easy to Replicate Across Environments

You set up a service in production, now you want a pre-prod environment. Ok, go onto the service dashboard and create a new environment. How do you create a new environment? Go to the dashboard.service.com and click through the UI. I think a few years ago going to a UI dashboard and clicking some buttons to "code" would have been acceptable. But now with how fast coding agents can write config files locally it's just not acceptable. If all my code is local I can create a new environment in ~10 seconds compared to 10 minutes.

To top it off there's also been an explosion of needed environments. A couple use cases I've run into

- Coding on multiple git worktrees at the same time: Even if your service makes it pretty easy to create new environments, creating a new environment for a service for _every_ github branch you have is usually not possible
- Customers want self hosted infrastructure for privacy: Deploying self hosted infrastructure for a customer when you rely on 20 different services means giving them 20 different logins. If all your infra is programatically deployed on a single hosting service like AWS (or Cloudflare) that's a piece of cake

### Cheaper

You have users and traffic and you look at the cost of paying for your database service compared to hosting it on AWS and it's 5x the cost! Why is that? Well that service is probably using AWS, they need to make money somehow so they're upcharging for ease of use. Self-hosting avoids this future problem altogether. I really liked [this podcast episode](https://www.devtools.fm/episode/72) where Dax Raad one of the creators of SST talks about services like Vercel charging essentially to be an easy to use wrapper around AWS. Which is true, they are way easier, for now. But a well developed library could make it just as easy.

### More Customizable

If you start using a service that doesn't support a feature you need it can be almost impossible to get that feature if you're not a big fish. Libraries, especially open source libraries can be a lot easier to contriubute to and if they aren't there's always the last resort of forking.

## Everything in Code

When I say everything in code I really mean everything in Typescript (Ironically this is written in a markdown file). Different languages all have their benefits. Here's a few different file types I'd expect to see across a lot of projects: .yml, ,sql, ,md, .json, .sh, .env. And I'm talking about as source code here, not build artifacts. Sometimes it makes sense to have them but most times I've wished they could be in Typescript.

Why? Because **Typescript is a First Class Language**

It has for loops, if, else, functions, typechecking all of these things, and it's made for it. It may seem like a low bar but its a better programming langauge than any of the aforementioned file types. So just don't write complex logic in YAML or Shell or whatever. But so often logic starts out as simple and grows in complexity:

- Templated YAML if..else and for loops in Terraform
- Templated SQL to take in API arguments
- Complex shell build scripts

All of these things alone would be better off written in Typescript and when talking about them in the context of a larger project even more so. It allows for typechecking across the entire codebase, a consistent build process where you don't have to write custom scripts to copy files that are not typescript into a dist directory

Sometimes it will be unavoidable but I always try to defer to writing in a constistent language

## Stability

I don't know if there is really a name for this concept but I'll try to explain it. Code is a living thing. It decays if it's unmaintained. But if it becomes ubiquitous enough it also becomes standardized. It rises and falls with the tide of ecosystems. When looking for code and concepts to build on top of I want to pick things that are going to last. I've picked a lot of new open source libraries here. Bun, BetterAuth, Alchemy. The ones that are newer I chose because they seem to be riding a wave. Bun is riding the wave of Typescript, faster dev tooling, as well as the AI wave with the recent Anthropic acquisitition. Alchemy I see riding this wave of Infrastructure as Code as well as the Typescript. Typescript and Python seem to be taking off in full stack apps in a way that feelslike we're heading towards a Duopoly. SQLite I chose because its existing ubiquity as well as the fact it doesn't need any external services to be run. If Postgres didn't need to be run locally as a separate process and was supported by Cloudflare I probably wouldn't chosen that. All the libraries I selected I've tried to make sure they have reasonable staying power over the next 5-10 years. And it's not just because I think my new apps will last 5 years (they won't) it's more about self-learning for the future. It's never good to spend years of your life working with tech that becomes obsolete.
