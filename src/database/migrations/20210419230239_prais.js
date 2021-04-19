
exports.up = function(knex) {
  return knex.schema.createTable('praias', table => {
    table.increments('id_praia');
    table.scring('nome');
    table.scring('foto');
    table.scring('lat');
    table.scring('long');
    table.scring('strelas');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('praias');
  
};
