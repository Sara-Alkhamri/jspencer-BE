const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
}

//methods to handel CRUD operations for contact table

async function add(contact) {
    const [id] = await db('contact').insert(contact, 'id');
    return find(id);
  }

function find() {
    return db('contact').select('id', 'firstName', 'lastName', 'email', 'message')
}