const activateUser = async (code:string) => {
    try {
        const API_URL = 'http://localhost:3001/api/v1';
        const resp = await fetch(`${API_URL}/activate/${code}`, {
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
