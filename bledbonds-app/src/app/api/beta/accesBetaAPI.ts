export default async function accesBetaAPI(email: string) {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return await fetch(`${API_URL}/beta/acces`, {
    method: 'PUT',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
}