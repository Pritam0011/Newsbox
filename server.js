require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const http = require("http").createServer(app);
const moment = require("moment");
app.locals.moment = moment;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./html"));

const port = process.env.PORT || 4000;

http.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});

app.use(express.static(__dirname + "/view"));
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes/index"));
