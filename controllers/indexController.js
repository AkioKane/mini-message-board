const db = require("../db/quaries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log("Messages: ", messages);
  return messages;
}

async function createMessageGet(req, res) {
  // render the form
}

async function createMessagePost(req, res) {
  const { message, name } = req.body;
  await db.insertMessage(message, name, new Date().toISOString());
  res.redirect("/");
}

async function indexPost (req, res) {
  console.log("username to be saved: ", req.body);
  createMessagePost(req, res);
}

async function indexGet (req, res) {
  const arr = await getMessages(req, res)
  res.render("index", {title: "Mini Message Board", messages: arr});
}

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost,
  indexPost,
  indexGet
};