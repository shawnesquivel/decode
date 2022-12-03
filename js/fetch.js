// console.log(document);

// $(document).ready(function () {
//   var tabURL;
//   chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
//     tabURL = tabs[0].url;
//     console.log("TabURL", tabURL);
//     $.ajax({
//       url: `<localhost>/<ENDPOINT>?url=${tabURL}`,
//       method: "GET",
//       success: function (data) {
//         document.querySelector("repsonse").innerText = data;
//       },
//       error: function (err) {
//         document.querySelector("target").innerHTML =
//           "error calculating your sustainability data.";
//         console.log("error", xhr);
//       },
//     });
//   });
// });
