const path = require("path");
const express = require("express")
// const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config  /Users/rafiqkamal/Desktop/Applications/guessing-game
const publicDirectoryPath = path.join(__dirname, "/guessing-game");
// const viewsPath = path.join(__dirname, "../templates/views")
// const partialsPath = path.join(__dirname, "../templates/partials")

// Set up Handlebar engine and views location
// app.set("view engine", "hbs");
// app.set("views", viewsPath);
// hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})