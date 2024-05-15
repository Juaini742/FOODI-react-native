import { z } from "zod";

export type LoginSchema = z.infer<typeof schema>;

export const schema = z.object({
  email: z.string().email().nonempty("Username must not be empty").min(1),
  password: z.string().min(6).nonempty("Username must not be empty"),
});
