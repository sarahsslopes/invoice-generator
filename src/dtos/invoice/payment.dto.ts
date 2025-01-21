import { z } from "zod";

export const paymentSchema = z.object({
  qrCode: z.string().nullish(),
  accountBank: z.string(),
  accountName: z.string(),
});

export type PaymentDto = z.infer<typeof paymentSchema>;