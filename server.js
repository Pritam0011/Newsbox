const express = require("express");
// const napi = new NewsAPI("6774a7a88fc0411c996360a4d2bea4a8");
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

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
