interface newsletterInterface {
  subject: string;
  text: string[];
  title: string;
}

interface newsletterInterfaceProps {
  isTest: boolean;
}

const testNewsletterAPI = async (newsletter: newsletterInterface, props: newsletterInterfaceProps) => {
  try {
    const host = window.location.host;
    let API_URL = '';
    if (host === 'localhost:3000') {
      API_URL = 'https://api.bledbonds.es/api/v1';
    } else {
      API_URL = 'https://api.bledbonds.es/api/v1';
    }
    const resp = await fetch(`${API_URL}/newsletters/${props.isTest ? 'sendTest' : 'send'}`, {
      method: 'POST',
      headers: {
        'x-api-key': '6d83d4496c0010950eb2f3a0db79004c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newsletter)
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

export default testNewsletterAPI;
