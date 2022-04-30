let formData = new FormData();
formData.append('client_id', 'desafiotecnico');
formData.append('username', 'gabcosta');
formData.append('password', 'r3li@bl3');
formData.append('grant_type', 'password');

const keycloak = {
    authorization_endpoint: "http://localhost:5050/realms/desafiocontabil/protocol/openid-connect/auth",
    token_endpoint: "http://localhost:5050/realms/desafiocontabil/protocol/openid-connect/token"
}

const authenticate = () => fetch(keycloak["authorization_endpoint"])

const get = async (path) => {
    let authResponse = await authenticate();
    console.log(`AUTH RESPONSE: ${authResponse}`);

    return fetch(`http://localhost:8080${path}`, {
        headers: {"AUTHORIZATION": "Basic f8f57427-82d7-4d67-acb6-088f024e7601"},
        method: "GET"
    })
};

export {get}
