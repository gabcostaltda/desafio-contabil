const BASE_URL = `http://localhost:8081/apollo/api`;

const GET = async (path) => fetch(`${BASE_URL}${path}`);

const POST = async (path, data) => fetch(`${BASE_URL}${path}`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

export {GET, POST}
