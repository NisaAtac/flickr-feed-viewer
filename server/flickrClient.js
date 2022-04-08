const axios = require("axios");
const url = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=`;

function parse(data) {
  let result = [];
  console.log(data);
  const items = data.items;
  items.map((item, i) => {
    const media = item.media.m;
    const title = item.title;
    const author = item.author;
    //accessing hrefs

    // const imageLink = links.filter((linkItem) => {
    //   return (
    //     linkItem.$.type === "image/jpeg" && !linkItem.$.href.includes("mp4")
    //   );
    // });

    // if (imageLink) {
    //   obj.push({ href: imageLink[0], title: title, author: author });
    // }

    result.push({ href: media, title: title, author: author });
  });
  return result;
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
