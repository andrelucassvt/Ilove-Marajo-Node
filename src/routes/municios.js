const routes = require('express').Router();
const municipios = require('../controllers/municipos');

routes.get('/municipios', municipios.list);

routes.post('/post', municipios.post);

module.exports = routes;