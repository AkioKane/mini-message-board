const { Router, text } = require("express");
const { indexPost, indexGet } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexGet);
indexRouter.post("/new", indexPost);

module.exports = indexRouter;