// import 
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// initiate app
const app = express();
app.use(cors())

// controllers
const charController = require("./controllers/charController");

// app routing
app.use("/characters", charController);
app.get("/", (request, response) => {
    response.json({
        message: "Welcome to the runitback api",
        instructions: ""
    });
});


module.exports = app;