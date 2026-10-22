import { SITE } from "@/lib/site";
import type { QuoteInput } from "@/lib/quote";

function oneLine(value: string) {
  return value.replace(/[\r\n\0]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char] ?? char;
  });
}

function quoteText(data: QuoteInput) {
  return [
    "New quotation request from the Geofields website.",
    "",
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    "",
    "Project details:",
    data.message,
  ].join("\n");
}

function quoteHtml(data: QuoteInput) {
  const rows = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", data.service],
  ]
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px;border-bottom:1px solid #eee;color:#555">${label}</th><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `<div style="font-family:Inter,Arial,sans-serif;line-height:1.5;color:#111">
  <p>New quotation request from the Geofields website.</p>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px">${rows}</table>
  <p style="margin-top:20px"><strong>Project details</strong></p>
  <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
</div>`;
}

async function sendWithResend(data: QuoteInput, apiKey: string) {
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || "Geofields Website <beth.t@example.com>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [SITE.email.sales],
      cc: [SITE.email.info],
      reply_to: data.email,
      subject: `Website quotation request from ${oneLine(data.name)} (${oneLine(data.company)})`,
      text: quoteText(data),
      html: quoteHtml(data),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Resend failed (${response.status}): ${detail.slice(0, 300)}`);
  }
}

async function sendWithFormSubmit(data: QuoteInput) {
  const response = await fetch(`https://formsubmit.co/ajax/${SITE.email.sales}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "GeofieldsTanzaniaWebsite/1.0",
    },
    body: JSON.stringify({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      _replyto: data.email,
      _cc: SITE.email.info,
      _subject: `Website quotation request from ${oneLine(data.name)} (${oneLine(data.company)})`,
      _template: "table",
      _captcha: "false",
      source: `${SITE.url}/request-quote`,
    }),
  });

  const payload = (await response.json().catch(() => null)) as {
    success?: boolean | string;
    message?: string;
  } | null;

  const ok = payload?.success === true || payload?.success === "true";
  if (!response.ok || !ok) {
    throw new Error(payload?.message || `FormSubmit failed (${response.status})`);
  }
}

export async function sendQuoteEmail(data: QuoteInput) {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    await sendWithResend(data, resendKey);
    return;
  }
  await sendWithFormSubmit(data);
}
