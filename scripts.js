// const header = document.querySelector(".target");
const inputs = document.querySelector(".inputs");
// const response = document.querySelector(".response");
// header.innerText = "Clothing Materials";

// // let xpath = "//a[text()='cotton']";

// // let matchingElement = document.evaluate(
// //   xpath,
// //   document,
// //   null,
// //   XPathResult.FIRST_ORDERED_NODE_TYPE,
// //   null
// // ).singleNodeValue;

// // console.log(matchingElement);

// for (const li of document.querySelectorAll("li")) {
//   const searchTerm = "cotton";
//   const searchTerm2 = "polyester";
//   if (li.textContent.toLowerCase().includes(searchTerm)) {
//     console.log(li.textContent);
//   }
//   if (li.textContent.toLowerCase().includes(searchTerm2)) {
//     console.log(li.textContent);
//   }

//   //   also do the same thing for p tags, span tags
// }

// async function fetchData() {
//   // get the URL

//   // query the response

//   const options = {
//     method: "GET",
//   };
//   const res = await fetch(
//     "https://638b8a0e7220b45d2292679a.mockapi.io/results",
//     options
//   )
//     .then((response) => {
//       const jsonPromise = response.json();
//       jsonPromise.then((data) => {
//         inputs.innerHTML = data
//           ?.map(
//             (item) => `
//             <h1>Overall Rating: ${item.overallRating}</h1>
//             <li>Sus Rating ${item.susRating}</li>
//             <li>Number of Washes Left: ${item.numOfWashes}</li>`
//           )
//           .join("");
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

$(document).ready(function () {
  let tabURL;

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    tabURL = tabs[0].url;
    console.log(tabURL);
    console.log("URL from get-url.js", tabURL);
    $.ajax({
      url: `https://638b8a0e7220b45d2292679a.mockapi.io/results`,
      method: "GET",
      success: function (data) {
        console.log("Server Response:", data);
      },
      error: function (xhr) {
        document.getElementById("title").innerHTML =
          "Sorry, this page could not be summarized.";
        console.log("error", xhr);
      },
    });
  });
});
