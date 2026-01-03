const http = require('http');

const data = JSON.stringify({
    email: 'debug_test_native_2@example.com',
    password: 'password123',
    username: 'debug_test_native',
    phone: '1234567890'
});

const options = {
    hostname: 'localhost',
    port: 5001,
    path: '/api/auth/signup',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);

    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
        console.log('Response:', body);
    });
});

req.on('error', (error) => {
    console.error('Request Failed:', error);
});

req.write(data);
req.end();
