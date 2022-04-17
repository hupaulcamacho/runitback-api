// import 
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// initiate app
const app = express();

// controllers
const charController = require("./controllers/charController")
// app routing
app.get("/", (request, response) => {
    response.json({
        message: "Welcome to the runitback api",
        instructions: ""
    });
});

app.use("/characters", charController);

// listening on port
const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})