// ====================================================================================================
// REQUIREMENTS & PORT SECTION
// ====================================================================================================

// access file structure
const fs = require("fs");
const path = require("path");

//
const routes = require("./controllers/");
const sequelize = require("./config/connection");

// connect to port and allow automatic routing, or default to PORT 3001
const PORT = process.env.PORT || 3001;

// ====================================================================================================
// EXPRESS.JS SECTION START
// ====================================================================================================
//
const express = require("express");
const app = express();

// For server to accept incoming data the way we need, tell Express.js app to intercept POST request before arriving to callback function.
// The raw data will then be run through a couple of functions to take data transferred over HTTP and convert it to a JSON object.

// parse incoming string or array data
// Express.js method to take incoming POST data and convert it to key/value pairings that can be accessed by `req.body` object.
// `extended: true` = telling Express to look for sub-arrays
app.use(express.urlencoded({ extended: true }));

// middleware to parse incoming JSON data
// takes incoming POST data in JSON form and parses in into the `req.body` js object.
app.use(express.json());

// `__dirname` is a Node.js environment variable that tells you absolute path of file
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

// ====================================================================================================
// EXPRESS.JS SECTION END
// ====================================================================================================

// ====================================================================================================
// HANDLEBARS SECTION START
// ====================================================================================================
// connect to Handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// ====================================================================================================
// HANDLEBARS SECTION END
// ====================================================================================================

// ====================================================================================================
// SEQUELIZE START
// ====================================================================================================
// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
