const routes = require('express').Router();
const praias = require('../Controller/controllerPraias');

routes.get('/praias', praias.listPraias);
routes.get('/praia', praias.listandoUmaPraia);
routes.get('/prais-municipio', praias.listaPraiasUnicoMunicipio);

routes.post('/postPraias', praias.cadastraPraias);

routes.delete('/deltePraias/:id', praias.delete);

module.exports = routes;