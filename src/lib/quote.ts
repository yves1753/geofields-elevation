import { z } from "zod";

export const quoteServices = [
  "Drilling Services",
  "Geological & Exploration",
  "Mining Supplies",
  "Mining Services",
  "Underground Support (GUS)",
  "Other",
] as const;

export const quoteSchema = z.object({
  name: z.string().trim().min(1, "Required").max(120),
  company: z.string().trim().min(1, "Required").max(160),
  email: z.email("Enter a valid email").max(160),
  phone: z.string().trim().min(5, "Required").max(40),
  service: z.enum(quoteServices),
  message: z.string().trim().min(1, "Required").max(4000),
  website: z.string().optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
