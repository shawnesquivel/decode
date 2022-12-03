() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, urlId } = obj;
    if (type === "NEW") {
    }
  });
};
