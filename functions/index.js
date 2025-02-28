export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/validate") {
      const body = await request.text();
      try {
        JSON.parse(body);
        return new Response("Valid JSON", { status: 200 });
      } catch {
        return new Response("Invalid JSON", { status: 400 });
      }
    }

    // Fallback to returning the static page
    return fetch(request);
  },
};

