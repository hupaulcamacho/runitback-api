const express = require("express");
const router = express.Router();

const { getAllUsers } = require('../queries/usersQueries');


router.get("/", async (request, response) => {
    try {
        const users = await getAllUsers();
        response.json(users);
    } catch(err){
        response.status(500).send('error')
    }
});


module.exports = router