
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('municipios').del()
    .then(function () {
      // Inserts seed entries
      return knex('municipios').insert([
        {
          id_municipio: 1,
          name: 'Ponta de pedras',
          photo: 'https://www.google.com/maps/place/Praia+de+Mangabeira/@-1.3578083,-48.8028113,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipM5G-bghXjtAP_BxSQsPz8VaxGa1HQiEJ4uv5OW!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM5G-bghXjtAP_BxSQsPz8VaxGa1HQiEJ4uv5OW%3Dw86-h114-k-no!7i3000!8i4000!4m5!3m4!1s0x92a3821fbb4115c1:0xf5e57319c55aad42!8m2!3d-1.3578083!4d-48.8028113',
          lat: '-1.3578083',
          lon: '-48.8028113',
          star: 4,
        },
      ]);
    });
};
