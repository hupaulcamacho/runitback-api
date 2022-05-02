const db = require('../db/dbconfig'); 

const getAllUsers = async () => {
    let users = await db.any('SELECT * FROM users');
    return users
}

module.exports = {
    getAllUsers
}