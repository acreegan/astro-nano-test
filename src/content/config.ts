import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

export const collections = { blog };
