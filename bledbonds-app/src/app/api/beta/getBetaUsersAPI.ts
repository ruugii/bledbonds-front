export default async function getBetaUsersAPI() {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return await fetch(`${API_URL}/beta/`, {
    method: 'GET',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}
