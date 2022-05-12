const pgp = require('pg-promise')();
const databaseUrl = process.env.DATABASE_URL;

const cn ={
    connectionString: databaseUrl
}

if(process.env.ENVIRONMENT !== 'development'){
    cn.ssl =  {
        rejectUnauthorized: false
      }
}

const db = pgp(cn);

module.exports = db;