import { z } from "zod";

export type UserSchema = z.infer<typeof schema>;

export const schema = z.object({
  username: z.string().nonempty("Username must not be empty").min(1),
  email: z.string().email().nonempty("Username must not be empty").min(1),
  password: z.string().min(6).nonempty("Username must not be empty"),
});
