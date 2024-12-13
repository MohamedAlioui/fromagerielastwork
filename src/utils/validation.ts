import { z } from 'zod';

// User validation schemas
export const userValidation = {
  register: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(50),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters')
  }),
  
  login: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required')
  })
};

// Product validation schemas
export const productValidation = {
  create: z.object({
    name: z.string().min(2).max(100),
    price: z.number().positive(),
    category: z.string().min(1),
    description: z.string().optional(),
    weight: z.number().positive()
  }),
  
  update: z.object({
    name: z.string().min(2).max(100).optional(),
    price: z.number().positive().optional(),
    category: z.string().min(1).optional(),
    description: z.string().optional(),
    weight: z.number().positive().optional()
  })
};

// Order validation schemas
export const orderValidation = {
  create: z.object({
    items: z.array(z.object({
      productId: z.string(),
      quantity: z.number().int().positive(),
      weight: z.number().positive()
    })).min(1),
    shippingAddress: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      postalCode: z.string()
    })
  })
};