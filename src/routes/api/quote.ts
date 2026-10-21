import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { quoteSchema } from "@/lib/quote";
import { sendQuoteEmail } from "@/lib/send-quote-email";

export const Route = createFileRoute("/api/quote")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
        }

        const parsed = quoteSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ ok: false, error: "Please check the form and try again." }, { status: 400 });
        }

        if (parsed.data.website) {
          return Response.json({ ok: true });
        }

        try {
          await sendQuoteEmail(parsed.data);
          return Response.json({ ok: true });
        } catch (error) {
          console.error(error);
          return Response.json(
            { ok: false, error: "We could not send your enquiry just now." },
            { status: 502 },
          );
        }
      },
    },
  },
});
