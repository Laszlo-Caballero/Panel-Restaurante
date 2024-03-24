import { z } from "zod";

export const menuSchema = z.object({
  id: z.number().positive().optional(),
  nombre: z.string().min(3),
  precio: z.number().positive(),
  estado: z.boolean(),
  descripcion: z.string().min(100),
  vendidos: z.number().nonnegative().optional(),
});
