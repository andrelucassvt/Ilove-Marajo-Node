
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('municipios').del()
    .then(function () {
      // Inserts seed entries
      return knex('municipios').insert([
        {
          id_municipios: 1,
          nome_municipios: 'Ponta de Pedras'
        }
      ]);
    });
};
