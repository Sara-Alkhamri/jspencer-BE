const db = require('../database/dbConfig');

module.exports = {
    get,
    add,
    find,
    findBy,
    findById,
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