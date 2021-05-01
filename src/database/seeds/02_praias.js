
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('praia').del()
    .then(function () {
      // Inserts seed entries
      return knex('praia').insert([
        {
          nome_praia: 'Praia Grande',
          foto: 'https://www.google.com/maps/place/Praia+Grande+de+Salvaterra/@-0.7628496,-48.511852,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMg4Q4SrXgvtSQWROr2c14oiOGNQ2eJo4qSsn-s!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMg4Q4SrXgvtSQWROr2c14oiOGNQ2eJo4qSsn-s%3Dw360-h270-k-no!7i2048!8i1536!4m5!3m4!1s0x92a6bba82d1009c9:0xf8b205fbe791e347!8m2!3d-0.7628496!4d-48.511852',
          lat: '-0.7628496',
          long: '-48.511852',
          avaliacao: 4,
          municipios: 'Salvaterra',
        },

        {
          nome_praia: 'Praia Portinho',
          foto: 'https://www.google.com/maps/place/Praia+Grande+de+Salvaterra/@-0.7628496,-48.511852,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMg4Q4SrXgvtSQWROr2c14oiOGNQ2eJo4qSsn-s!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMg4Q4SrXgvtSQWROr2c14oiOGNQ2eJo4qSsn-s%3Dw360-h270-k-no!7i2048!8i1536!4m5!3m4!1s0x92a6bba82d1009c9:0xf8b205fbe791e347!8m2!3d-0.7628496!4d-48.511852',
          lat: '-0.7528755',
          long: '-48.511443',
          avaliacao: 5,
          municipios: 'Salvaterra',
        }
      ]);
    });
};