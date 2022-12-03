// THIS FILE DOESNT DO ANYTHING

// contentScript can do stuff the the DOM

(() => {
  const newUrlLoaded = async () => {
    console.log("new url loaded");
  };
  console.log("running contentScripts");
  // listen for messages
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;
    console.log(type, value, videoId);
    newUrlLoaded();
    // if (type === "NEW") {
    //   // currentVideo = videoId;
    //   // newVideoLoaded();
    // } else if (type === "PLAY") {
    //   youtubePlayer.currentTime = value;
    // } else if (type === "DELETE") {
    //   currentVideoBookmarks = currentVideoBookmarks.filter(
    //     (b) => b.time != value
    //   );
    //   chrome.storage.sync.set({
    //     [currentVideo]: JSON.stringify(currentVideoBookmarks),
    //   });

    //   response(currentVideoBookmarks);
    // }
  });
})();
