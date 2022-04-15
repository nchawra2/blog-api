const express = require("express");
const blogRouter = express.Router();

blogRouter.get("/", (req, res) => {
  res.send({ name: "naishadh" });
});

module.exports = blogRouter;
