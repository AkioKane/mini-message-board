const express = require("express");
const path = require("path");

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

const app = express();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newMessageRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Start server!")
})