import {get} from "./BaseController"

async function obterTodosUsuarios() {
    try {
        let resposta = await get("/v1.0/usuarios");
        if (!resposta.ok) {
            throw new Error(`HTTP error: ${resposta.message}`);
        }
        return await resposta.json();
    }catch (e) {
        console.log(e)
    }
}

export {obterTodosUsuarios}

