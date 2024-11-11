const getChatData = async (id: number, token: string) => {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return await fetch(`${API_URL}/chat/${id}`, {
    method: 'GET',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
      'user-token': token,
    }
  })
    .then(resp => resp.json())
    .catch(error => console.error(error));
}

const getChatDataOld = async (id: number, token: string) => {
  try {
    const API_URL = 'https://api.bledbonds.es/api/v1';
    const resp = await fetch(`${API_URL}/chat/${id}`, {
      method: 'GET',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
        'user-token': token,
      }
    });
    if (!resp.ok) {
      throw new Error('Network response was not ok');
    } else {
      const data = await resp.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default getChatData;
