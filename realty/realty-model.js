const db = require('../database/dbConfig');

module.exports = {
    get,
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function get() {
    return db('realty');
}

async function add(image) {
    const [id] = await db('realty').insert(image, 'id');
    return findById(id);
}

function find() {
    return db('realty').select('id', 'image')
}

function findBy(filter) {
    return db('realty').where(filter)
}

function findById(id) {
    return db('realty')
        .where({id})
        .first();
}

function update(id, changes) {
    return db('realty')
      .where({ id: id })
      .update(changes)
      .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
    return db('realty')
        .where('id', id)
        .del()
}