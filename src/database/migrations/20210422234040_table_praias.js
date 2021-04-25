
exports.up = function(knex) {
  return knex.schema.createTable('praia', table => {
    table.increments('id_praia').primary();
    table.string('nome_praia').notNullable();
    table.string('foto').notNullable();
    table.string('lat').notNullable();
    table.string('long').notNullable();
    table.integer('avaliação').notNullable();

    table.integer('id_municipios').notNullable();
    table.foreign('id_municipios').references('municipios.id_municipios');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('praia');
};