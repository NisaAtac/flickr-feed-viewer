const axios = require("axios");
const parseString = require("xml2js").parseString;
const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=`;

function parse(data) {
  let obj = { hrefs: [] };
  parseString(data, function (err, result) {
    const entries = result.feed.entry;
    for (entry of entries) {
      const links = entry.link;
      //accessing hrefs
      for (linkItem of links) {
        if (
          linkItem.$.type === "image/jpeg" &&
          !linkItem.$.href.includes("mp4")
        ) {
          obj.hrefs.push(linkItem.$.href);
        }
      }
    }
  });
  return obj;
}

module.exports = async function getFlickrData(tag) {
  try {
    const response = await axios.get(url + tag);
    return parse(response.data);
  } catch (error) {
    console.error(error);
    throw new Error("Error occurred while getting data from Flickr..");
  }
};
