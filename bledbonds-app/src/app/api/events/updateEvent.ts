interface IEvent {
  name: string;
  description: string;
  date: string;
  place: string;
}

const updateEventAPI = async (id: number, obj:IEvent, token:string) => {
  const API_URL = 'https://api.bledbonds.es/api/v1';
  return await fetch(`${API_URL}/events/${id}/updateEvent`, {
    method: 'PUT',
    headers: {
      'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
      'user-key': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
    .then(resp => resp.json())
    .catch(error => console.error(error));
}

const updateEventAPIOld = async (id: number, obj:IEvent, token:string) => {
  try {
    const host = window.location.host;
    let API_URL = '';
    
    if (host.includes('localhost:3000')) {
      API_URL = 'https://api.bledbonds.es/api/v1';
    } else {
      API_URL = 'https://api.bledbonds.es/api/v1';
    }

    console.log(obj);
    

    const resp = await fetch(`${API_URL}/events/${id}/updateEvent`, {
      method: 'PUT',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
        'user-key': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
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

export default updateEventAPI;
