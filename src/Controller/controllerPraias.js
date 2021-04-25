const knex = require('../database');

module.exports = {
  async listPraias(req, res, next) {
    try {
      const list = await knex.select().table('praia');

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async listaPraiasUnicoMunicipio(req, res, next) {
    try {
      const { id } = req.params;
      const list = await knex.select('id_municipios', 'nome_praia').table('praia').where({ id_municipios: id });

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async cadastraPraias(req, res, next) {
    try {
      const {
        nome_praia,
        foto,
        lat,
        long,
        avaliação,
        id_municipios,
      } = req.body;

      const praias = {
        nome_praia,
        foto,
        lat,
        long,
        avaliação,
        id_municipios,
      };

      await knex('praia').insert(praias);

      return res.status(201).json({ 'dados': 'salvos' });

    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex('praia').where({ id_praia: id }).del()
    
      return res.json({ 'dados': 'deletado' });
    } catch (error) {
      next(error)
    }
  }
}