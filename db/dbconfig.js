const pgp = require('pg-promise')();
const databaseUrl = process.env.DATABASE_URL;

const cn ={
    connectionString: databaseUrl,
    allowExitOnIdle: true,
    max: 30
}

const db = pgp(cn);

module.exports = db;