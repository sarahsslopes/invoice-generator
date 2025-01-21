import { z } from 'zod';
import { companySchema } from './company.dto';
import { customerSchema } from './customer.dto';

export const headerDataSchema = z.object({
  company: companySchema.nullish(),
  customer: customerSchema.nullish(),
});

export type HeaderDataDto = z.infer<typeof headerDataSchema>;