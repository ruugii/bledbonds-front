const uploadImage = async (image: File | undefined) => {
  try {
    const host = window.location.host;
    let API_URL = '';
    if (host === 'localhost:3000') {
      API_URL = 'http://localhost:3001/api/v1';
    } else {
      API_URL = 'https://api.bledbonds.es/api/v1';
    }

    const formData = new FormData();
    formData.append('image', image);

    const resp = await fetch(`${API_URL}/img/upload`, {
      method: 'POST',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
      },
      body: formData
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

export default uploadImage;