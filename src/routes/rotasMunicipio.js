const routs = require('express').Router();
const controller = require('../Controller/municipio');

routs.get('/', controller.index);
routs.get('/municipios', controller.buscarTodos);
routs.get('/municipio/:id', controller.buscarUm);

routs.post('/criar', controller.criar);

module.exports = routs;