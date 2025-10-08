import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(20),
  PORT: z.coerce.number().default(3334),
});
export const env = envSchema.parse(process.env);
