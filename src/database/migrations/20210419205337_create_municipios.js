
exports.up = function(knex) {
  return knex.schema.createTable('municipios', table => {
    table.increments('id_municipio').primary();
    table.string('name').notNullable();
    table.string('photo').notNullable();
    table.string('lat').notNullable();
    table.string('lon').notNullable();
    table.integer('star').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('municipios');
  
};
