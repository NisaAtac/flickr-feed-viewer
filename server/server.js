const express = require("express");
const app = express();
const getFlickrData = require("./flickrClient.js");

app.get("/api", async (req, res) => {
  const tag = req.query.tag;
  const response = await getFlickrData(tag);
  // console.log("Api response is ", response);
  res.json(response);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
