import Router from 'koa-router'
import contaBancariaController from "./controller/contaBancariaController.js";

const routes = new Router({prefix: '/contabilize/api'})

routes.get('/', (ctx => {
    ctx.body = 'Contabilize API'
}))

routes.get('/contas-bancarias', contaBancariaController.obterTodasContasBancarias)
routes.post('/contas-bancarias', contaBancariaController.criarContaBancaria)
routes.put('/contas-bancarias', contaBancariaController.atualizarContaBancaria)

export default routes