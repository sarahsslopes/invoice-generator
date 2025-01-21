import { z } from 'zod';

export const companySchema = z.object({
  name: z.string(),
  document: z.string(),
  phone: z.string(),
  address: z.string(),
  email: z.string().nullish(),
  link: z.string().nullish(),
});

export type CompanyDto = z.infer<typeof companySchema>;
