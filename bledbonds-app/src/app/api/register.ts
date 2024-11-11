interface RegisterInterface {
  email: string;
  phone: string;
  password: string;
  name: string;
  birthDate: string;
  genre: string;
}

const registerAPI = async (user: RegisterInterface) => {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(resp => resp.json())
    .catch(error => console.error(error));
}

const registerAPIOld = async (user: RegisterInterface) => {
  try {
    const host = window.location.host;
    let API_URL = '';
    if (host === 'localhost:3000') {
      API_URL = 'https://api.bledbonds.es/api/v1';
    } else {
      API_URL = 'https://api.bledbonds.es/api/v1';
    }
    const resp = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
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

export default registerAPI;
