const axios = require("axios");
const parseString = require("xml2js").parseString;
const url = `https://api.flickr.com/services/feeds/photos_public.gne?tags=`;

function parse(data) {
  let obj = [];
  parseString(data, function (err, result) {
    const entries = result.feed.entry;
    console.log(entries[0].title);
    entries.map((entry, i) => {
      const links = entry.link;
      const title = entry.title[0];
      const author = entry.author[0].name[0];
      //accessing hrefs

      const imageLink = links.filter((linkItem) => {
        return (
          linkItem.$.type === "image/jpeg" && !linkItem.$.href.includes("mp4")
        );
      });

      if (imageLink) {
        obj.push({ href: imageLink[0], title: title, author: author });
      }
    });
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
