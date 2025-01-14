import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export const TEST_IMPORT = "I am the text imported from validators package";
