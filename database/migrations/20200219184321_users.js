
exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
        users.increments(); //creates a primary key called id
        
        users
        .string('username', 128) //creates string field that is both required and unique
        .notNullable()
        .unique();
        
        users
        .string('password', 128) //creates a password field that is required
        .notNullable()
    })
  
};

exports.down = function(knex) {
    //drops entire table, which allows to undo any changes made to the schema is necessary.
    return knex.schema.dropTableIfExists('users');
};

