
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('municipios').del()
    .then(function () {
      // Inserts seed entries
      return knex('municipios').insert([
        {
          nome_municipios: "Ponta de Pedras"
        },

        {
          nome_municipios: "Soure"
        },

        {
          nome_municipios: "Afuá"
        },

        {
          nome_municipios: "Anajás"
        },

        {
          nome_municipios: "Breves"
        },

        {
          nome_municipios: "Cachoeira do Arari"
        },

        {
          nome_municipios: "Chaves"
        },

        {
          nome_municipios: "Curralinho"
        },

        {
          nome_municipios: "Muaná"
        },

        {
            nome_municipios: "Salvaterra"
        },

        {
          nome_municipios: "Santa Cruz do Arari"
        },
        
        {
            nome_municipios: "São Sebastião da Boa Vista"
        }

      ]);
    });
};