const express = require('express')
const controller = require('../Controller/municipio')

const routs = express.Router()

routs.get('/municipio/:id',controller.buscarUm)

routs.get('/municipio',controller.buscarTodos)

routs.post('/municipio',controller.criar)

routs.put('/municipio/:id',controller.atualizar)

routs.delete('/municipio/:id',controller.excluir)

module.exports = routs