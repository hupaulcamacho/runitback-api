const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.json({name: "test"})
});


module.exports = router