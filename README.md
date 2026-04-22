# EAS Platform

## React + TypeScript + Vite + TailwindCSS

## Sanity Frontend Setup

Create a local `.env` file from `.env.example` if you want to override the default Sanity project settings.

Available query helpers:

- `getSpeakers()`
- `getEvents()`
- `getFaqs()`
- `getTeamMembers()`
- `getBlogPosts()`
- `getBlogPostBySlug(slug)`
- `getSanityContentCollections()`

Example usage:

```ts
import { getBlogPosts } from "@/services/sanity";

const posts = await getBlogPosts();
```
