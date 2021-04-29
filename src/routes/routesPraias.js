const routes = require('express').Router();
const praias = require('../Controller/controllerPraias');

routes.get('/praias', praias.listPraias);
routes.get('/municipio/praias/:id', praias.listaPraiasUnicoMunicipio);

routes.post('/postPraias', praias.cadastraPraias);

routes.delete('/deltePraias/:id', praias.delete);

module.exports = routes;