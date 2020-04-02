const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findById,
    remove
}

//methods to handel CRUD operations for contact table

async function add(msg) {
    const [id] = await db('contact').insert(msg, 'id');
    return findById(id);
  }

// function add(msg) {
//     return db('contact')
//     .insert(msg, 'id')
//     .then(ids => {
//         return findById(ids[0]);
//     })
// }

function find() {
    return db('contact').select('id', 'firstName', 'lastName', 'email', 'message')
}

function findById(id) {
    return db('contact')
        .where({id})
        .first()
}


function remove(id) {
    return db('contact')
        .where('id', id)
        .del()
        // .then(count => (count > 0 ? get(id) : null));
}