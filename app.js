// import 
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// initiate app
const app = express();

// controllers

// app routing
app.get("/", (request, response) => {
    response.json({
        message: "Welcome to the runitback api",
        instructions: ""
    });
});

// listening on port
const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})