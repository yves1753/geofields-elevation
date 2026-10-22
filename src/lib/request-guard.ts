const MAX_JSON_BYTES = 16_384;

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const originHost = new URL(origin).host;
    const requestHost = new URL(request.url).host;
    return Boolean(originHost) && originHost === requestHost;
  } catch {
    return false;
  }
}

export function isJsonContentType(request: Request) {
  const type = request.headers.get("content-type") ?? "";
  return type.toLowerCase().startsWith("application/json");
}

export async function readJsonBody(request: Request): Promise<
  { ok: true; value: unknown } | { ok: false; status: number; error: string }
> {
  const declared = Number(request.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > MAX_JSON_BYTES) {
    return { ok: false, status: 413, error: "Request too large." };
  }

  const raw = await request.text();
  if (raw.length > MAX_JSON_BYTES) {
    return { ok: false, status: 413, error: "Request too large." };
  }

  try {
    return { ok: true, value: JSON.parse(raw) as unknown };
  } catch {
    return { ok: false, status: 400, error: "Invalid request." };
  }
}

export function jsonError(status: number, error: string, extraHeaders?: HeadersInit) {
  return Response.json({ ok: false, error }, { status, headers: extraHeaders });
}
