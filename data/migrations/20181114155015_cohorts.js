exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', (table) => {
    table.increments();
    table.string('name', 160).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};
