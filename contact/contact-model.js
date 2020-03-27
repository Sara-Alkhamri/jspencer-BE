const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    remove
}

//methods to handel CRUD operations for contact table

async function add(message) {
    const [id] = await db('contact').insert(message, 'id');
    return find(id);
  }

function find() {
    return db('contact').select('id', 'firstName', 'lastName', 'email', 'message')
}

function remove(id) {
    return db('contact')
        .where('id', id)
        .del()
        // .then(count => (count > 0 ? get(id) : null));
}