const axios = require("axios");
const url = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=`;

// Parse response from Flickr API
function parse(data) {
  let result = [];
  const items = data.items;
  items.map((item, i) => {
    const media = item.media.m;
    const title = item.title;
    const author = item.author;
    //adding href, title and author to the result object
    result.push({ href: media, title: title, author: author });
  });
  return result;
}

// Make request to Flickr API for a given tag
module.exports = async function getFlickrData(tag) {
  try {
    const response = await axios.get(url + tag);
    return parse(response.data);
  } catch (error) {
    console.error(error);
    throw new Error("Error occurred while getting data from Flickr..");
  }
};
