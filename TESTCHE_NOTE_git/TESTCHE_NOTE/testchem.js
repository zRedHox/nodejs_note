require("dotenv").config();

const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const expressLayouts = require("express-ejs-layouts");
const { append } = require("express/lib/response");
//const connectDB = require("./server/config/db");
const session = require("express-session");
//const passport = require("passport");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(methodOverride("_method"));
// Increase payload size limit to 10MB

//connect to Database
//connectDB();

// Static Files
app.use(express.static("public"));

//Templateing Engine
app.use(expressEjsLayouts);
//app.set("layout", "./layouts/test1");
app.set("view engine", "ejs");

//Routes
app.use("/", require("./server/routes/test1"));

// Handle 404
app.get("*", function (req, res) {
  res.status(404).send("404 page nout found");
  //res.status(404).render("404");
});

app.listen(4998, "0.0.0.0", () => {
  console.log(`App listening on http://0.0.0.0:4998`);
});

//test
