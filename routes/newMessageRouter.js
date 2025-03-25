const { Router } = require("express");
const { newMessageGet } = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", newMessageGet);

module.exports = newMessageRouter;