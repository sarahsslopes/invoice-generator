import { z } from 'zod';
import { headerDataSchema } from './header-data.dto';
import { invoiceDetailsSchema } from "./invoice-details.dto";

export const invoiceBodySchema = z.object({
  header: headerDataSchema,
  details: invoiceDetailsSchema,
});

export type invoiceBodyDto = z.infer<typeof invoiceBodySchema>;