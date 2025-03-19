---
layout: post
title: Wednesday
subtitle: will work for knowledge
---

As I've already mentioned [I'm skittish about being non-billable]({% post_url 2025-02-28-Friday %}). Yet, here I am again, being paid to learn a thing.

I'm working on kiosk software, a niche my company seems eager to explore. I'm only about 7 weeks into working here but I think I'm settling in nicely. I'm able to apply a lot of the [laziness](https://dev.to/jmfayard/laziness-impatience-and-hubris-1ea9) that I enjoy to pretty much every task. I have yet to plumb the depths of Shopify's metafields or metaobjects to build out a significantly customizable feature, but still I'm ripping through my sprints at an uncomfortable speed and with much perceived peer fanfare.

But being a "make thing look good" developer, at my salary, isn't right. Yes, I can get a lot done in little time, but you could also pay a room of brain-damaged monkeys half a sack of peanuts to do most of what I've been doing. So I'm looking for my footing; my personal _proof of indispensability_ to the company.

Since we just banged out a kiosk app entirely in Liquid, I've reflected on what went wrong, or what could have gone easier, during the build. These issues have stemmed from team and hardware assumptions, mostly, and the novelty of the entire endeavor. Without going into too much detail, I'll say that I'm betting the rest of my week that custom Hydrogen-based storefronts will be a better match for these types of projects going forward.

The problem is that no one here has worked on Hydrogen before, myself included. And this could be a boon to my indispensability stat.

## Getting started

I love reading that type of documentation, don't you? "Here, copy this command and _bang_ you're done!" We'll see about that.

The docs want me to run:

```
npm create @shopify/hydrogen@latest -- --quickstart
```

First of all, I've created a `pnpm` project because I want things in packages. Yes, I know you can do this with `npm` but, man, `pnpm` just hits different.

So I run `pnpm create @shopify/hydrogen@latest -- --quickstart` instead, only to find that their generated app is in JavaScript, by default. I want TypeScript. I miss TypeScript.

After a bit of snooping, I find some [documentation](https://shopify.dev/docs/api/shopify-cli/hydrogen/hydrogen-init#flags-propertydetail-quickstart) indicating that `--quickstart` is shorthand for `shopify hydrogen init --path hydrogen-quickstart --mock-shop --language js --shortcut --routes --markets none`. It turns out that by just running `pnpm create @shopify/hydrogen@latest` is just as much of a quickstart and allows you to customize these things through a CLI wizard.

Now I've got a TypeScript project called `hydrogen-storefront` inside my `packages/` directory and it's using Tailwind to boot, much to the future chagrin of my frontend brethren. I'll convert them one of these days.

But wait, the default Tailwind install is borked. When I run `pnpm dev` from inside the newly created project directory and try to view the homepage in the browser, I'm met with this error in my console:

```
10:37:41 AM [vite] Internal server error: Can't resolve 'tailwindcss' in '/home/meowsus/Work/Sandbox/hydrogen-demo/packages/hydrogen-storefront/app/styles'
  Plugin: @tailwindcss/vite:generate:serve
  File: /home/meowsus/Work/Sandbox/hydrogen-demo/packages/hydrogen-storefront/app/styles/tailwind.css?direct
  ...
```

The only mention of "tailwind" in the project's `package.json` is from `"@tailwindcss/vite": "4.0.0-beta.8"`... Well, that's probably the problem... why wouldn't Hydrogen ship with its own version of Tailwind declared? And isn't Tailwind 4.0 out of beta at this point? I'm going to just install the latest version of Tailwind and this vite plugin and see if that helps.

But wait, why are [the Tailwind docs](https://tailwindcss.com/docs/installation/using-vite) reporting that you should install v4 like so?

```
npm install tailwindcss @tailwindcss/vite
```

I'm surprised that there's no `--save-dev` in there, since Tailwind isn't a runtime dependency. Apparently [others noticed this too](https://github.com/tailwindlabs/tailwindcss/discussions/13854). Whatever. It's going in `devDependencies` and to hell with their documentation:

```
pnpm i -D tailwindcss@latest @tailwindcss/vite@latest
```

Lo and behold, we have `v4.0.14`:

```diff
diff --git a/packages/hydrogen-storefront/package.json b/packages/hydrogen-storefront/package.json
index f6ff83b..fce54a9 100644
--- a/packages/hydrogen-storefront/package.json
+++ b/packages/hydrogen-storefront/package.json
@@ -35,7 +35,7 @@
     "@shopify/mini-oxygen": "^3.1.1",
     "@shopify/oxygen-workers-types": "^4.1.2",
     "@shopify/prettier-config": "^1.1.2",
-    "@tailwindcss/vite": "4.0.0-beta.8",
+    "@tailwindcss/vite": "4.0.14",
     "@total-typescript/ts-reset": "^0.4.2",
     "@types/eslint": "^9.6.1",
     "@types/react": "^18.2.22",
@@ -53,6 +53,7 @@
     "eslint-plugin-react-hooks": "^5.1.0",
     "globals": "^15.14.0",
     "prettier": "^2.8.4",
+    "tailwindcss": "^4.0.14",
     "typescript": "^5.2.2",
     "vite": "^5.1.8",
     "vite-tsconfig-paths": "^4.3.1"
```

Sure enough, running `pnpm dev` in the hydrogen directory now runs error-free.

## What next?

Well, I don't know.

Since I'm spiking this week, it would probably behoove me to figure out the shape of the thing I want to construct by the end of the week.

After reading some documentation, browsing the newly created codebase, and watching some bespoke, sub-half-hour YouTube videos, it's pretty apparent that Hydrogen is just Shopified [Remix](https://remix.run/), and Remix is just alternative Next.js.

Hydrogen lets you write in React to build a storefront, as opposed to being confined to just having to write Liquid, HTML, CSS, and JavaScript for a traditional Shopify theme. Still, in the end, we have a website and a website may not be what we want for a kiosk.

Neither solution is an SPA but with Hydrogen you're a lot closer to an SPA-like experience, since you are using React to build your site. We can get similar results in Liquid by using something like [htmx](https://htmx.org/). If JavaScript is broken or disabled, however, our Liquid theme would fall down much more quickly than our Hydrogen app, since Remix runs the backend and can technically ship without any client-side React. You can spend a lot of time and get similar results with Liquid, but agency work and "spending a lot of time" are kind of competing concepts.

## But what's the problem(s) we're trying to solve?

During the development of our current kiosk project there were a few issues that we encountered:

1. We relied on JavaScript a lot more than we would in a traditional Shopify theme project because we were chasing that native-like or SPA-like experience.
2. We totally bypassed checkout because the order gets sent to a POS system for a sales associate to pick up and walk through with the customer.
3. We had a _ton_ of extra unused code in the codebase to ensure that Shopify functioned as expected (content-related stuff, mostly, but this is a larger problem overall since we extend a generic theme we maintain in-house for every build which hopes to generically solve problems and unify developer experience across projects).
4. The client purchased the kiosk from another company which charges a monthly fee for remote administration of its Android-based hardware (we were unsure what this software provided OOTB and the client was upset that this wasn't explained to them when purchasing the kiosk).
5. Related, we created a PWA and enabled gesture navigation & app pinning on the device to make the experience during development match what we hoped would be a similar experience provided by the kiosk administration software.
6. We built app-like browsing navigation, i.e., ignored `window.history` entirely and rolled our own history library to allow users to only navigate back to the homepage.
7. We struggled with loading indication in the few places we asynchronously request content on another page and replace specific elements on the current page.
8. We had to rely on using the Android Emulator during development to ensure the changes we were making rendered correctly on-device.
9. Since this site was not intended to be publicly available, but only accessible via the kiosk, we need to ensure that the site is always password protected, but accessible to the kiosk.

There's likely more that I'm forgetting at the moment. The point is that Liquid themes support a more traditional commerce experience, i.e., user navigates to a website, adds stuff to their cart, and buys it. Hydrogen should more easily support a non-traditional commerce experience.

If we just say "kiosk software will be written in Hydrogen" we blow a good amount of the problems out of the water but still run up against the kiosk administration issue. We don't want the site rendered inside an obvious chrome window, so a PWA (at least) will be required. Working on Hydrogen gives us the added benefit of increasing our default starter template by way of [Storybook](https://storybook.js.org/). We maintain a difficult-to-maintain style guide already in our Shopify themes, but using Storybook for Shopify Themes would be untenable, due to the dependency on Shopify-specific liquid. We could, fairly easily, convert this style guide into Storybook and make it globally available to all Hydrogen builds. We could just as easily have localized Storybook instances for each project.

For the remainder of the use-cases we could consider React Native. Apparently Remix has a way of defining their loaders to be specifically accessed via API only, so we could maintain a Hydrogen site and expose specific routes as API-only. There is also the [`storefront-api-client`](https://github.com/Shopify/shopify-app-js/tree/main/packages/api-clients/storefront-api-client#readme) to consider, which might bypass the need for Hydrogen entirely.

## So what am I building?

Here's what I think I should do:

1. Stand up a Hydrogen instance
2. Set up an installable PWA
3. Stand up Storybook, create a button, and use it throughout the site
4. Remove all unrelated code (with [knip](https://knip.dev/)), informed by the needs of the current kiosk build I'm working on (no checkout, etc.)
5. Create a lines-of-code analysis between the two as a maintainability discussion point

And as a stretch goal:

1. Stand up a React Native instance
2. Import and leverage the Storybook button
3. Pull collection page data from an API route in the Hydrogen instance
4. Pull product page data from the Storefront API Client

Nice. That seems reasonable. Now if it wasn't already Wednesday...
