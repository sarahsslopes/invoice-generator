import { itemSchema } from './item.dto';
import { paymentSchema } from './payment.dto';
import { z } from 'zod';

export const invoiceDetailsSchema = z.object({
  items: z.array(itemSchema),
  payment: paymentSchema,
  note: z.string().nullish(),
});

export type InvoiceDetailsDto = z.infer<typeof invoiceDetailsSchema>;
