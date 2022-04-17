const express = require("express");
const router = express.Router();

const charData = require('../CharacterData.json');

router.get("/", (request, response) => {
    response.json(charData)
});

router.get("/:id", (request, response) => {
    const charId = request.params.id;
    const characters = charData.characters;

    const singleChar = characters.find(char => char.id = charId)
    response.json(singleChar)
});

module.exports = router