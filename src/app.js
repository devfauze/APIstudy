import express, { json } from 'express'
import conectarDatabase from './config/dbConnect.js'
import routes from './routes/index.js'

const conexao = await conectarDatabase()

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão feita com sucesso")
})

const app = express()
routes(app)

export default app

