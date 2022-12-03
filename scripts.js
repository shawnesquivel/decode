const inputs = document.querySelector(".inputs");

// When the document is ready, use the jQuery
$(document).ready(function () {
  let tabURL;

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    // Get the current Url
    tabURL = tabs[0].url;
    console.log(tabURL);

    // Do the Fetch Request - WORKING - DO NOT TOUCH
    // $.ajax({
    //   url: `https://638b8a0e7220b45d2292679a.mockapi.io/results`,
    //   method: "GET",
    //   success: function (data) {
    //     console.log("Server Response:", data);
    //   },
    //   error: function (xhr) {
    //     document.getElementById("title").innerHTML =
    //       "Sorry, this page could not be summarized.";
    //     console.log("error", xhr);
    //   },
    // });

    // Try sending the TABURL
    $.ajax({
      url: `https://638b8a0e7220b45d2292679a.mockapi.io/results?id=${tabURL}`,
      method: "GET",
      success: function (data) {
        console.log("Server Response:", data);

        // To do: Using hte data
      },
      error: function (xhr) {
        document.getElementById("title").innerHTML =
          "Sorry, this page could not be summarized.";
        console.log("error", xhr);
      },
    });
  });
});
