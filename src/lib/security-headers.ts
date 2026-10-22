/** Applied to every response. Marketing pages stay framed-off; MCP stays callable by assistants. */
export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.google.com https://maps.google.com",
  "upgrade-insecure-requests",
].join("; ");

function isMcpPath(pathname: string) {
  return (
    pathname === "/mcp" ||
    pathname.startsWith("/.mcp") ||
    pathname === "/.well-known/oauth-protected-resource"
  );
}

function isApiPath(pathname: string) {
  return pathname === "/api" || pathname.startsWith("/api/");
}

function isHttps(request: Request) {
  const url = new URL(request.url);
  if (url.protocol === "https:") return true;
  const forwarded = request.headers.get("x-forwarded-proto");
  return forwarded?.split(",")[0]?.trim() === "https";
}

export function applySecurityHeaders(request: Request, headers: Headers) {
  const pathname = new URL(request.url).pathname;
  const mcp = isMcpPath(pathname);

  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Permitted-Cross-Domain-Policies", "none");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  );

  if (isHttps(request)) {
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  }

  if (!mcp) {
    headers.set("X-Frame-Options", "DENY");
    headers.set("Content-Security-Policy", CONTENT_SECURITY_POLICY);
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
    headers.set("Cross-Origin-Resource-Policy", "same-origin");
  }

  if (isApiPath(pathname)) {
    headers.set("Cache-Control", "no-store, max-age=0");
    headers.set("X-Robots-Tag", "noindex, nofollow");
  }
}

export function withSecurityHeaders(request: Request, response: Response) {
  const headers = new Headers(response.headers);
  applySecurityHeaders(request, headers);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
