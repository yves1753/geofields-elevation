import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { quoteSchema } from "@/lib/quote";
import { sendQuoteEmail } from "@/lib/send-quote-email";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { isJsonContentType, isSameOrigin, jsonError, readJsonBody } from "@/lib/request-guard";

export const Route = createFileRoute("/api/quote")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!isSameOrigin(request)) {
          return jsonError(403, "Forbidden.");
        }
        if (!isJsonContentType(request)) {
          return jsonError(415, "Unsupported media type.");
        }

        const limited = rateLimit(`quote:${clientIp(request)}`, {
          limit: 5,
          windowMs: 10 * 60 * 1000,
        });
        if (!limited.ok) {
          return jsonError(429, "Too many requests. Please try again later.", {
            "Retry-After": String(limited.retryAfterSec),
          });
        }

        const body = await readJsonBody(request);
        if (!body.ok) {
          return jsonError(body.status, body.error);
        }

        const parsed = quoteSchema.safeParse(body.value);
        if (!parsed.success) {
          return jsonError(400, "Please check the form and try again.");
        }

        if (parsed.data.website) {
          return Response.json({ ok: true });
        }

        try {
          await sendQuoteEmail(parsed.data);
          return Response.json({ ok: true });
        } catch {
          console.error("Quote email delivery failed");
          return jsonError(502, "We could not send your enquiry just now.");
        }
      },
    },
  },
});
