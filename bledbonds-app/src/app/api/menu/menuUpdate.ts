interface RegisterInterface {
  key: string;
  value: string;
}

const menuUpdate = async (user: RegisterInterface) => {
  try {
    let API_URL = '';
    API_URL = 'https://api.bledbonds.es/api/v1';
    const resp = await fetch(`${API_URL}/masterdata/getAppOptionEnabled`, {
      method: 'PUT',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: user.key,
        value: user.value
      })
    });
    if (!resp.ok) {
      console.log(resp);
      
      throw new Error('Network response was not ok');
    } else {
      const data = await resp.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default menuUpdate;
