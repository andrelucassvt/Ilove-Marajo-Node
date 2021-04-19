const knex = require('../database');

module.exports = {
  async list(req, res, next) {
    try {
      const list = await knex.select('name').table('municipios');

      return res.json(list);
    } catch (error) {
      next(error);
    }
  },

  async post(req, res, next) {
    try {
      const {
        name,
        photo,
        lat,
        lon,
        star,
      } = req.body;

      const municipios = {
        name,
        photo,
        lat,
        lon,
        star,
      };

      const post = await knex('municipios').insert(municipios);

      return res.status(201);

    } catch (error) {
      next(error);
    }
  },
}