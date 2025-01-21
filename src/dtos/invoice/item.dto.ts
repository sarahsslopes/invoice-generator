import { z } from 'zod';

export enum ItemType {
  SERVICE = 'SERVIÇO',
  PRODUCT = 'PRODUTO',
}

export enum UniteType {
  UN = 'UN',
  METER = 'M',
}

export const itemSchema = z.object({
  name: z.string(),
  quantity: z.number(),
  value: z.number(),
  type: z.nativeEnum(ItemType),
  unit: z.nativeEnum(UniteType),
}).required();

export type ItemDto = z.infer<typeof itemSchema>;