export async function onRequest(context) {
  const { request } = context;
  const GOOGLE_URL = 'https://script.google.com/macros/s/AKfycbzCKtE-mKx_X8OZMsvihtXKea9eBiHxstyWIhPNdnBFoFSZnAnz374V08gpm32W_4g3/exec?action=getData';

  // Handle CORS Pre-flight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  try {
    const response = await fetch(GOOGLE_URL);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allows any site to read the data
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
