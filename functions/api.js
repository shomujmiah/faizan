export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const GOOGLE_URL = 'https://script.google.com/macros/s/AKfycbzCKtE-mKx_X8OZMsvihtXKea9eBiHxstyWIhPNdnBFoFSZnAnz374V08gpm32W_4g3/exec';

  // If the request is for /api (GET), fetch data
  if (request.method === 'GET') {
    const response = await fetch(GOOGLE_URL + '?action=getData');
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  // If the request is POST (Saving Settings), forward it to Google
  if (request.method === 'POST') {
    const body = await request.json();
    const response = await fetch(GOOGLE_URL, {
      method: 'POST',
      body: JSON.stringify(body)
    });
    return response;
  }
}
