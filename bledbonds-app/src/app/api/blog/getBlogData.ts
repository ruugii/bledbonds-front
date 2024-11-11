const getBlogData = async () => {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return fetch(`${API_URL}/blog/`, {
    method: 'GET',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c'
    }
  })
    .then(resp => resp.json())
    .catch(error => console.error(error));
}

const getBlogDataLocal = async () => {
  try {
    const host = window.location.host;
    let API_URL = '';
    
    if (host.includes('localhost:3000')) {
      API_URL = 'https://api.bledbonds.es/api/v1';
    } else {
      API_URL = 'https://api.bledbonds.es/api/v1';
    }
    const resp = await fetch(`${API_URL}/blog/`, {
      method: 'GET',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c'
      }
    });
    if (!resp.ok) {
      return [
        {
          category: 'Citas',
          title: 'Citas para personas con discapacidad',
          resume: 'Conoce a personas con discapacidad en BledBonds',
          postBy: 'Jese Leos',
          postByAvatar: 'https://randomuser.me/api/portraits',
          id: 1
        }
      ]
    } else {
      const data = await resp.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default getBlogData;
