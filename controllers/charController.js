const express = require("express");
const router = express.Router();

const charData = require('../CharacterData.json');

router.get("/", (request, response) => {
    response.json(charData)
});

module.exports = router