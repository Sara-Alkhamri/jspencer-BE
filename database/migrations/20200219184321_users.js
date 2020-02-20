
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments(); //creates a primary key called id

        tbl.string('username', 128) //creates string field that is both required and unique
        .unique()
        .notNullable()

        tbl.string('passowrd', 128) //creates a passowrd field that is required
        .notNullable()
    })
  
};

exports.down = function(knex) {
    //drops entire table, which allows to undo any changes made to the schema is necessary.
    return knex.schema.dropTableIfExists('users');
};
