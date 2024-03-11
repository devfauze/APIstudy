import express from 'express'
import livros from './livroRoutes.js'
import autores from '../models/Autor.js'

const routes = (app) => { 
    app.route('/').get((req, res) => res.status(200).send
    ("Curso de Node.js"))

    app.use(express.json(), livros, autores)
}

export default routes