const getCategoriesAPI = async () => {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return await fetch(`${API_URL}/category/`, {
    method: 'GET',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c'
    }
  })
    .then(resp => resp.json())
    .catch(error => console.error(error));
}

const getCategoriesLocal = async () => {
  try {
    const host = window.location.host;
    let API_URL = '';
    
    if (host.includes('localhost:3000')) {
      API_URL = 'https://api.bledbonds.es/api/v1';
    } else {
      API_URL = 'https://api.bledbonds.es/api/v1';
    }
    const resp = await fetch(`${API_URL}/category/`, {
      method: 'GET',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c'
      }
    });
    if (resp.ok) {
      const data = await resp.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default getCategoriesAPI;
