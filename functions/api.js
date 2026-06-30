export async function onRequest(context) {
  const GOOGLE_URL = 'https://script.google.com/macros/s/AKfycbzCKtE-mKx_X8OZMsvihtXKea9eBiHxstyWIhPNdnBFoFSZnAnz374V08gpm32W_4g3/exec?action=getData';

  try {
    const response = await fetch(GOOGLE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch from Google');
    }
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
