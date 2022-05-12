const express = require("express");
const router = express.Router();

router.get("/",  (request, response) => {
    try {
        const users = [];
        response.json(users);
    } catch(err){
        response.status(500).send('error')
    }
});


module.exports = router