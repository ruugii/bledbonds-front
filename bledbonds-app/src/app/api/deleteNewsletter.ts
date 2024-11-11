interface newsletterInterface {
  token: string;
}

const deleteNewsletter = async (newsletter: newsletterInterface) => {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return await fetch(`${API_URL}/newsletters/delete/${newsletter.token}`, {
    method: 'DELETE',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
      'Content-Type': 'application/json'
    }
  })
    .then(resp => resp.json())
    .catch(error => console.error(error));
}

const deleteNewsletterOld = async (newsletter: newsletterInterface) => {
  try {
    const host = window.location.host;
    let API_URL = '';
    if (host === 'localhost:3000') {
      API_URL = 'https://api.bledbonds.es/api/v1';
    } else {
      API_URL = 'https://api.bledbonds.es/api/v1';
    }
    const resp = await fetch(`${API_URL}/newsletters/delete/${newsletter.token}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
        'Content-Type': 'application/json'
      }
    });
    console.log(`Deleting newsletter with token ${newsletter.token}`);
    console.log(resp);
    if (!resp.ok) {
      if (resp.status === 404) {
        throw new Error('Network response was not ok');
      }
    } else {
      const data = await resp.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default deleteNewsletter;
