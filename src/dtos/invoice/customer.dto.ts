import { z } from 'zod';

export const customerSchema = z.object({
  name: z.string(),
  document: z.string().nullish(),
  phone: z.string().nullish(),
  email: z.string().nullish(),
  address: z.string().nullish(),
});

export type CustomerDto = z.infer<typeof customerSchema>;
