
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('praia').del()
    .then(function () {
      // Inserts seed entries
      return knex('praia').insert([
        {
          id_praia: 1,
          nome_praia: 'mangabeira',
          foto: 'http://fjsafbahsfja.com',
          lat: '-0.432423423',
          long: '-48.34235321',
          avaliação: 4,
          id_municipios: 1,
        }
      ]);
    });
};