exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('municipios').del()
    .then(function () {
      // Inserts seed entries
      return knex('municipios').insert([
        {
          id_municipio: 2,
          name: 'Salvaterra',
          photo: 'https://www.google.com/maps/place/Praia+de+Joanes/@-0.872539,-48.510544,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMmL3og2AUXz_jJVep_9i67n9K7xS3B2i4W82UT!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMmL3og2AUXz_jJVep_9i67n9K7xS3B2i4W82UT%3Dw203-h152-k-no!7i3264!8i2448!4m9!1m2!2m1!1spraias+de+salvaterra!3m5!1s0x92a6a6fd29954c65:0x31f4d2c03837df!8m2!3d-0.8777989!4d-48.5090804!15sChRwcmFpYXMgZGUgc2FsdmF0ZXJyYVoeCgZwcmFpYXMiFHByYWlhcyBkZSBzYWx2YXRlcnJhkgEFYmVhY2iaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUkRkWEUzZWw5M1JSQUI',
          lat: '-0.872539',
          lon: '-48.510544',
          star: 4,
        },
      ]);
    });
};