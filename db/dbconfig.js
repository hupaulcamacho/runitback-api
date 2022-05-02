const pgp = require('pg-promise')();
const databaseUrl = process.env.DATABASE_URL;

const cn ={
    connectionString: databaseUrl,
    // ssl: {
    //     rejectUnauthorized: false
    //   }
}

const db = pgp(cn);

module.exports = db;