// THIS FILE DOESN"T DO ANYTHING
// Background.js should handle events and can send messages to the ContentScript
// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   // tabId = 531892
//   // tab  {
//   //  status: "loading"
//   //  url: url
//   // }
//   console.log(tabId, tab, tab.url);
//   if (tab.url) {
//     const tabURL = new URL(tab.url);
//     // console.log("tabURL", tabURL);
//     // const queryParameters = tab.url.split("?")[1];
//     // const urlParameters = new URLSearchParams(queryParameters);

//     chrome.tabs.sendMessage(tabId, {
//       type: "NEW",
//       videoId: tabURL,
//     });
//   }
// });

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
