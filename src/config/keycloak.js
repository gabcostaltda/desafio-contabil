/*
grant_type: "authorization_code"
code: "88a80e1c-4ff8-452b-8253-bbae519208d1.c155b807-fef2-4997-8853-a9e49819ae86.ccd09000-8ff8-4147-9f9b-ed48cd825857"
redirect_uri: "https://ouath.pstmn.io/v1/callback"
client_id: "desafiocontabil-backend"
client_secret: ""
*/


const CLIENT_ID = "desafiocontabil-frontend";
const REDIRECT_URI = "http://localhost:15000/";

const loginPage = "http://localhost:5050/realms/desafiocontabil/protocol/openid-connect/auth?response_type=code&client_id=" + CLIENT_ID + "&scope=email%20openid%20profile&redirect_uri=" + REDIRECT_URI;
const authEndpoint = "http://localhost:5050/realms/desafiocontabil/protocol/openid-connect/auth";
const tokenEndpoint = "http://localhost:5050/realms/desafiocontabil/protocol/openid-connect/token";
let code = "88a80e1c-4ff8-452b-8253-bbae519208d1.c155b807-fef2-4997-8853-a9e49819ae86.ccd09000-8ff8-4147-9f9b-ed48cd825857";

const variables = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: ""
}

export {loginPage, authEndpoint, tokenEndpoint, variables}