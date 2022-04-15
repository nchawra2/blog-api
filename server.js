const express = require("express");
const cors = require("cors");
const app = express();
const blogRouter = require("./routers/blogRouter");

app.use(cors());

app.use("/api/v1/blog", blogRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running successfully");
});
