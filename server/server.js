const express = require("express");
const app = express();
const getFlickrData = require("./flickrClient.js");

// create an endpoint for the route /api
app.get("/api", async (req, res) => {
  const tag = req.query.tag;
  const response = await getFlickrData(tag);
  res.json(response);
});

// run the app on port 5000
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
