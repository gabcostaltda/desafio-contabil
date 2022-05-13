import Koa from 'koa'
import routes from './routes.js'

const app = new Koa();

const PORT = process.env.NODE_PORT || 8081

app.use(routes.routes())

app.listen(PORT, () => {
    console.log("Server is rolling 🏎  at http://localhost:" + PORT)
})