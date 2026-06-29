export async function onRequest(context) {
  // Replace this URL with your ACTUAL Google Script Web App URL
  const GOOGLE_URL = 'https://script.google.com/macros/s/AKfycbzCKtE-mKx_X8OZMsvihtXKea9eBiHxstyWIhPNdnBFoFSZnAnz374V08gpm32W_4g3/exec';

  const response = await fetch(GOOGLE_URL);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' // This makes the browser happy
    }
  });
}
