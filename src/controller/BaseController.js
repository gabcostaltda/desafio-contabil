const BASE_URL = `http://localhost:8081/apollo/api`;

const GET = async (path) => fetch(`${BASE_URL}${path}`);

const POST = async (path, body) => fetch(`${BASE_URL}${path}`,
    {
        body
    })

export {GET, POST}
