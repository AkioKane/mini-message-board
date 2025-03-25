const newMessageGet = (req, res) => {
  res.render("form", {title: "New Message"})
}

module.exports = {
  newMessageGet
}