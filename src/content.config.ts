import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string().min(1, "Title is required"),
    pubDate: z.preprocess(arg => (typeof arg === "string" ? new Date(arg) : arg), z.date()),
    description: z.string().min(10, "Description should be at least 10 characters"),
    author: z.string().min(1, "Author is required"),
    image: z.object({
      url: z.string().url(),
      alt: z.string().min(1, "Alt text is required"),
    }),
    tags: z.array(z.string()).min(1, "At least one tag is required"),
  }),
});

export const collections = { posts };