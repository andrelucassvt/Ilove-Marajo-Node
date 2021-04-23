const routes = require('express').Router();
const praias = require('../controllers/controllerPraias');

routes.get('/praias', praias.listPraias);
routes.get('/municipio/praias/:id', praias.listaPraiasUnicoMunicipio);

routes.post('/postPraias', praias.cadastraPraias);

module.exports = routes;