
exports.up = function(knex) {
    return knex.schema.createTable('contact', tbl => {
        tbl.increments()
        tbl.string('firstName', 128).notNullable()
        tbl.string('lastName', 128).notNullable();
        tbl.string('email').notNullable();
        tbl.text('message', 1000);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('contact');
};
