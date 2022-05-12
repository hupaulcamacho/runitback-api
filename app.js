// import 
const express = require("express");
const cors = require("cors");
const path = require('path');
require("dotenv").config();

// initiate app and setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/../client/build")));

// controllers
const charController = require("./controllers/charController");
// const usersController = require("./controllers/usersController")

// app routing
app.use("/characters", charController);
// app.use("/users", usersController);

app.get("/", (request, response) => {
    response.json({
        message: "Welcome to the runitback api",
        instructions: ""
    });
});


module.exports = app;