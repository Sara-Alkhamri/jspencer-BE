
exports.up = function(knex) {
    return knex.schema.createTable('realty', tbl => {
        tbl.increments(); //primary key

        tbl.string('image', 500)
        .notNullable()
        .unique();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('image');
  
};
