export async function onRequest(context) {
  const GOOGLE_URL = 'https://script.google.com/macros/s/AKfycbzCKtE-mKx_X8OZMsvihtXKea9eBiHxstyWIhPNdnBFoFSZnAnz374V08gpm32W_4g3/exec?action=getData';

  try {
    // Add a 10-second timeout to the fetch
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(GOOGLE_URL, { signal: controller.signal });
    clearTimeout(timeout);

    if (!response.ok) {
      return new Response("Google Script returned status: " + response.status, { status: 500 });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return new Response("Error: " + err.message, { status: 500 });
  }
}
