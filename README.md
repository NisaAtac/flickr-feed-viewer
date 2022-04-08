# The Problem

Write a simple web application that reads data from Flickr's public feeds and displays the images on the page to the user. Please check the Flickr API documentation from the following URL:

- [Flickr](https://www.flickr.com/services/feeds/)
- [Public feed](https://api.flickr.com/services/feeds/photos_public.gne)

* Write a web application - backend built using JavaScript/NodeJS/ExpressJS and frontend developed using React.
* On page load the applications should load the public feed images in either a list or grid view.
* The user should be able to enter a keyword in a search box and click on a search button and the app should return images with the relevant tags.
* Use any other third party library of your choice if needed.

# Tools You Need

Make sure Node and NPM are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation)

# Solution

The project consists of two directories: _Server_ folder contains backend related files whereas _Client_ folder contains frontend related ones.

- Server runs on _http://localhost:5000_, to see what it returns open _http://localhost:5000/api_. In the _server_ directory, please start the server running:
  `node server.js`

- To start React app, in the _client_ directory, please run:
  `npm install`
  `npm start`

Open _http://localhost:3000_ to view it in your browser if it is not open by default.

# Architectural Design

frontend client (react) -> backend server (node) -> Flickr feed API

# App Usage Tip

To search with multiple text, you can type tags with comma(,).
