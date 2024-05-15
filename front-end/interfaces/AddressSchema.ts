import { z } from "zod";

export type AddressSchema = z.infer<typeof schema>;

export const schema = z.object({
  prov: z.string().nonempty("Province must  not be empty").min(1),
  regency: z.string().nonempty("Regency must not be empty").min(1),
  subdistrict: z.string().nonempty("SubDistrict must not be empty").min(1),
  district: z.string().nonempty("District must not be empty").min(1),
  completeAddress: z
    .string()
    .nonempty("Complete Address must not be empty")
    .min(1),
});
