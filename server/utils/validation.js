import { z } from "zod";

export const menuSchema = z.object({
  id: z.number().positive().optional(),
  nombre: z.string().min(3),
  precio: z.number().positive(),
  estado: z.boolean(),
  descripcion: z.string().min(100),
  vendidos: z.number().nonnegative().optional(),
  categoria: z.string(),
  sku: z.number().positive(),
});

export const userSchema = z.object({
  nombre: z.string().min(5),
  email: z.string().email(),
  contraseña: z.string().min(5),
});

export const loginSchema = z.object({
  email: z.string().email(),
  contraseña: z.string().min(5),
});
