const TARGET_BASE = "https://tignaltofan.fun:888";

// یک کلید ساده برای امنیت
const API_KEY = "change-this-key";

const STRIP_HEADERS = new Set([
  "host",
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);

export default async function handler(request) {
  try {
    const url = new URL(request.url);

    // فقط مسیر /api مجاز است
    if (!url.pathname.startsWith("/api/")) {
      return new Response("Not Found", { status: 404 });
    }

    // بررسی API KEY
    const key = request.headers.get("x-api-key");
    if (key !== API_KEY) {
      return new Response("Unauthorized", { status: 401 });
    }

    // حذف /api
    const path = url.pathname.replace("/api", "");
    const targetUrl = TARGET_BASE + path + url.search;

    // ساخت headers
    const headers = new Headers();

    for (const [k, v] of request.headers) {
      const keyLower = k.toLowerCase();

      if (STRIP_HEADERS.has(keyLower)) continue;
      if (keyLower === "x-api-key") continue;

      headers.set(k, v);
    }

    const options = {
      method: request.method,
      headers,
      redirect: "manual",
    };

    if (request.method !== "GET" && request.method !== "HEAD") {
      options.body = request.body;
    }

    const res = await fetch(targetUrl, options);

    const newHeaders = new Headers();

    for (const [k, v] of res.headers) {
      newHeaders.set(k, v);
    }

    return new Response(res.body, {
      status: res.status,
      headers: newHeaders,
    });

  } catch (err) {
    return new Response("Bad Gateway", { status: 502 });
  }
}
