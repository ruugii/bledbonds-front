const fetchPostById = async (id:number) => {
  try {
    let API_URL = '';
    API_URL = 'http://localhost:3001/api/v1';
    console.log(id);
    const resp = await fetch(`${API_URL}/blog/${id}`, {
      method: 'GET',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c'
      }
    });
    if (resp.ok) {
      const data = await resp.json();
      console.log(data);
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default fetchPostById;
