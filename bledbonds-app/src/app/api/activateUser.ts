const activateUser = async (code: string) => {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return await fetch(`${API_URL}/users/activate/${code}`, {
    method: 'PUT',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c'
    }
  })
    .then(resp => resp.json())
    .catch(error => console.error(error));
}

const activateUserOld = async (code: string) => {
  try {
    const host = window.location.host;
    let API_URL = '';
    
    if (host.includes('localhost:3000')) {
      API_URL = 'https://api.bledbonds.es/api/v1';
    } else {
      API_URL = 'https://api.bledbonds.es/api/v1';
    }
    const resp = await fetch(`${API_URL}/users/activate/${code}`, {
      method: 'PUT',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c'
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

export default activateUser;
