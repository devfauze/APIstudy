import express, { json } from 'express'
import conectarDatabase from './config/dbConnect.js'
import livro from './models/Livro.js'

const conexao = await conectarDatabase()

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
    console.log("Conexão feita com sucesso")
})

const app = express()
app.use(express.json())

function buscaLivro(id) {
    return livro.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso Node.js")
})

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status (200).json (listaLivros);
});


app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id)
    livros.splice(index, 10)
    res.status(200).send("Livro removido com sucesso")
})

export default app

