/** Cloudflare Worker entry point for the Anomaly Clinic guide. */
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    const response = await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);

    headers.set("Cross-Origin-Opener-Policy", "same-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "DENY");

    if (url.protocol === "https:") {
      headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
