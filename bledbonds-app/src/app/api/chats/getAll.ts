export default async function getAllChats() {
  const response = await fetch('https://api.bledbonds.es/api/v1/chat', {
    method: 'GET',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'user-token': `${localStorage.getItem('token') ?? ''}`,
      'web': 'true'
    }
  });
  const data = await response.json();
  return data;
}