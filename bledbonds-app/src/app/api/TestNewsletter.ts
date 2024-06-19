interface newsletterInterface {
  subject: string;
  text:string[];
  title:string;
}

interface newsletterInterfaceProps {
    isTest:boolean;
}

const testNewsletterAPI = async (newsletter:newsletterInterface, props:newsletterInterfaceProps) => {
  try {
      const API_URL = 'http://localhost:3001/api/v1';
      console.log(props.isTest);
      
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
