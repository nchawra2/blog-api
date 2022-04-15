const express = require("express");
const blogRouter = express.Router();

const {
  getAllBlogs,
  featured,
  latest,
  latestArtcles,
  selectedCategoryBlog,
  getBlog,
} = require("../controller/blogController");

blogRouter.get("/", getAllBlogs);
blogRouter.get("/featured", featured);
blogRouter.get("/latest", latest);
blogRouter.get("/latest-articles", latestArtcles);
blogRouter.get("/category/:cat", selectedCategoryBlog);
blogRouter.get("/:id", getBlog);

module.exports = blogRouter;
