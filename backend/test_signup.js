const fetch = require('node-fetch'); // Or native fetch if node 18+

const testSignup = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'debug_test_1@example.com',
                password: 'password123',
                username: 'debug_test_1',
                phone: '1234567890'
            })
        });

        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', data);

    } catch (error) {
        console.error('Request Failed:', error);
    }
};

testSignup();
