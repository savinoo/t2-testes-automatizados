
    const login = async (matricula: string, pass: string) => {
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({matricula, pass})
            });
            return response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }
export default login