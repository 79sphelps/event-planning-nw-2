"use strict";

/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// Modules
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const cors = require("cors");
const compression = require("compression");

// Config
const config = require("./server/config");

/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

mongoose.connect(
  config.MONGO_URI,
  { useNewUrlParser: true }
);
const monDb = mongoose.connection;

monDb.on("error", () => {
  console.log(
    `MongoDB Connection Error. Please make sure that
    ${config.MONGO_URI} is running`
  );
});

monDb.once("open", () => {
  console.info(`Connected to MongoDB: ${config.MONGO_URI}`);
});

/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(cors());

// Set port
const port = process.env.PORT || "8083";
app.set("port", port);

// Set static path to Angular app in dist
// Don't run in dev
if (process.env.NODE_ENV !== "dev") {
  app.use("/", express.static(path.join(__dirname, "/dist")));
  //app.use("/", express.static(path.join("/dist/event-planning-nw")));
}

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

global.appRoot = path.resolve(__dirname);

require(path.join(appRoot, "/server/api"))(app, config);
//require("./server/api")(app, config);

// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== "dev") {
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
    //res.sendFile(path.join("/dist/event-planning-nw/index.html"));
  });
}

/*
 |--------------------------------------
 | Server
 |--------------------------------------
 */

//app.listen(port, "192.168.0.20", () => console.log(`Server running on localhost:${port}`));
app.listen(port, () => console.log(`Server running on localhost:${port}`));