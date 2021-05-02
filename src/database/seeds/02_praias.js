
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('praia').del()
    .then(function () {
      // Inserts seed entries
      return knex('praia').insert([
        {
          id_praia: 1,
          nome_praia: 'Praia Grande',
          descricao: 'A praia é uma das mais famosas da ilha e tem diversos bares que oferecem saborosos drinques e petiscos, além de restaurantes com iguarias paraenses, como o famoso peixe frito com açaí(fruta típica da região), tudo isso animado ao som de uma boa música com ritmos locais, como o carimbó e o tecnobrega.',
          foto: 'https://www.google.com/maps/place/Praia+Grande+de+Salvaterra/@-0.7628496,-48.511852,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMg4Q4SrXgvtSQWROr2c14oiOGNQ2eJo4qSsn-s!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMg4Q4SrXgvtSQWROr2c14oiOGNQ2eJo4qSsn-s%3Dw360-h270-k-no!7i2048!8i1536!4m5!3m4!1s0x92a6bba82d1009c9:0xf8b205fbe791e347!8m2!3d-0.7628496!4d-48.511852',
          lat: '-0.7628496',
          long: '-48.511852',
          avaliacao: 4.50,
          municipios: 'Salvaterra',
        },

        {
          id_praia: 2,
          nome_praia: 'Praia Portinho',
          descricao: 'A belíssima praia do portinho de Salvaterra fica a menos de 500m do centro do município de Salvaterra, na ilha do marajó, litoral do estado do Pará. O local é perfeito para quem quer aproveitar os dias de descanso em meio a muito sol e natureza.',
          foto: 'https://www.google.com/maps/place/Praia+Grande+de+Salvaterra/@-0.7628496,-48.511852,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMg4Q4SrXgvtSQWROr2c14oiOGNQ2eJo4qSsn-s!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMg4Q4SrXgvtSQWROr2c14oiOGNQ2eJo4qSsn-s%3Dw360-h270-k-no!7i2048!8i1536!4m5!3m4!1s0x92a6bba82d1009c9:0xf8b205fbe791e347!8m2!3d-0.7628496!4d-48.511852',
          lat: '-0.7528755',
          long: '-48.511443',
          avaliacao: 5.0,
          municipios: 'Salvaterra',
        }
      ]);
    });
};