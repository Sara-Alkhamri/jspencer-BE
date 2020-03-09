const db = require('../database/dbConfig');

module.exports = {
    find,
}

//methods to handel CRUD operations for contact table

function find() {
    return db('contact').select('id', 'firstName', 'lastName')
}