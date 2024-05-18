import { z } from "zod";

export type BioSchema = z.infer<typeof schema>;

export const schema = z.object({
  name: z.string().nonempty("Name must not be empty").min(1),
  gender: z.string().nonempty("Gender must not be empty").min(1),
  born: z.string().nonempty("Born must not be empty").min(1),
  phone: z.string().min(1),
  job: z.string().nonempty("Job must not be empty").min(1),
});
