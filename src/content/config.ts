import { defineCollection, z} from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  type: "content",
  // loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: ({image}) => z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.object({
      src: image(),
      alt: z.string(),
    }).optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

export const collections = { blog };
