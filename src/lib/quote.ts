import { z } from "zod";

export const quoteServices = [
  "Drilling Services",
  "Geological & Exploration",
  "Mining Supplies",
  "Mining Services",
  "Underground Support (GUS)",
  "Other",
] as const;

const noHeaderBreaks = (value: string) => !/[\r\n\0]/.test(value);

const oneLine = (max: number) =>
  z
    .string()
    .trim()
    .min(1, "Required")
    .max(max)
    .refine(noHeaderBreaks, "Invalid characters")
    .transform((value) => value.replace(/[<>]/g, ""));

export const quoteSchema = z.object({
  name: oneLine(120),
  company: oneLine(160),
  email: z
    .email("Enter a valid email")
    .max(160)
    .refine(noHeaderBreaks, "Invalid characters"),
  phone: z
    .string()
    .trim()
    .min(5, "Required")
    .max(40)
    .regex(/^[+0-9() .\-]+$/, "Enter a valid phone number"),
  service: z.enum(quoteServices),
  message: z
    .string()
    .trim()
    .min(1, "Required")
    .max(4000)
    .transform((value) => value.replace(/[\0\u0001-\u0008\u000B\u000C\u000E-\u001F]/g, "")),
  website: z.string().max(200).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
