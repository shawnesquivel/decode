// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   const tabUrl = tab.title;
//   //   send message to content script that new page has been viste
//   //   console.log(tabId, tabUrl);
//   chrome.tabs.sendMessage(tabId, {
//     type: "NEW",
//     urlId: tabUrl,
//   });
// });

// chrome.browserAction.onClicked.addListener((tab) => {
//   // synchronous
//   chrome.tabs.create({ url: chrome.extension.getURL("homepage.html") });
// });
