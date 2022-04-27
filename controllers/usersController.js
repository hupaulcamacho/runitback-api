const express = require('express');
const router = express.Router();

// import database configuration
const db = require('../db/dbconfig');

// get all users
router.get("/", async (request, response) => {
    try {
        let users = await db.any('SELECT * FROM users');
        response.json(users);
    } catch (error) {
        console.log(error);
        response.json(error);
    }
});

module.exports = router;