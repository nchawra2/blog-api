const express = require("express");
const blogData = require("../data/blogData");

exports.getAllBlogs = (req, res) => {
  res.send({ data: blogData });
};

exports.getBlog = (req, res) => {
  selectedBlog = blogData.find((blog) => blog.id === req.params.id);
  relatedBlog = blogData.filter(
    (blog) =>
      blog.category === selectedBlog.category && blog.id !== selectedBlog.id
  );

  res.send({ data: selectedBlog, relatedBlog });
};

exports.featured = (req, res) => {
  let featured = blogData.slice(20, 23);
  res.send({ data: featured });
};

exports.latest = (req, res) => {
  let latest = blogData.slice(0, 3);
  res.send({ data: latest });
};

exports.latestArtcles = (req, res) => {
  let latestArticles = blogData.slice(10, 14);
  res.send({ data: latestArticles });
};

exports.selectedCategoryBlog = (req, res) => {
  filteredCategoryBlogs = blogData.filter(
    (blog) => blog.category === req.params.cat
  );
  res.send({ data: filteredCategoryBlogs });
};
