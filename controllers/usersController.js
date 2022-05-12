const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
    try {
        const users =([{name: "jim"},{name: "lop"}]).json();
        response.json(users);
    } catch(err){
        response.status(500).send('error')
    }
});


module.exports = router