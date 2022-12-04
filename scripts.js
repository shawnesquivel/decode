// Figure out what page we're on
const pageTitle = document.title;
// FORM INPUTS

let resultsPageData;

// CHROME EXTENSION
if (pageTitle === "Sustainable Clothing Tool") {
  const clothingType = document.querySelector(".clothingtype");
  const brand = document.querySelector(".brand");
  const materials = document.querySelector(".materials");
  const weight = document.querySelector(".weight");
  console.log(clothingType);

  // USER CLICKS YES: FORM SUBMIT
  const submitBtn = document.querySelector(".btn-yes");

  submitBtn.addEventListener("click", async () => {
    console.log("Submit button was clicked");

    const results = await fetch(
      "https://638b8a0e7220b45d2292679a.mockapi.io/results"
    )
      .then((res) => {
        console.log(res);
        clothingType.setAttribute("placeholder", "hoodie");
        brand.setAttribute("placeholder", "Everlane");
        materials.setAttribute("placeholder", "100% Organic Cotton");
        weight.setAttribute("placeholder", "0.8lbs");

        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  // USER CLICKS EDIT
  const editBtn = document.querySelector(".edit-btn");

  editBtn.addEventListener("click", (e) => {
    console.log("Edit Button was Clicked!");
    console.log("Type:", clothingType.value);
    console.log("Brand:", brand.value);
    console.log("Materials:", materials.value);
    console.log("Weight:", weight.value);
  });
  // When the document is ready, use the jQuery
  $(document).ready(function () {
    let tabURL;

    chrome.tabs.query(
      { active: true, lastFocusedWindow: true },
      function (tabs) {
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
            localStorage.setItem("data", JSON.stringify(data));
            // Dummy Data
            // inputs.innerText = data[0].susRating;
            clothingType.setAttribute("placeholder", "Hoodie");
            brand.setAttribute("placeholder", "Everlane");
            materials.setAttribute("placeholder", "100% Organic Cotton");
            weight.setAttribute("placeholder", "0.8lbs");

            resultsPageData = "hello world";
            // When Jay has server running, we should be setting the type, brand, materials, weight to the CALCULATOR INPUT
          },
          error: function (xhr) {
            document.getElementById("title").innerHTML =
              "Sorry, this page could not be summarized.";
            console.log("error", xhr);
          },
        });
      }
    );
  });
}

//

// Create another function that activates when SUBMIT is clicked

// Takes the CALCULATOR INPUT (the results of Jay's web scraper + user manual input)

// Returns the results

// export default resultsPageData;

// export { resultsPageData };

if (pageTitle === "Sustainable Clothing Manual Search") {
  console.log("Sustainable Clothing Manual Search");
  const homeBtn = document.querySelector(".home__btn");
  console.log(homeBtn);
  const clothingTypeInput = document.getElementById("clothing-type-input");
  const brandInput = document.getElementById("brand-input");
  const materialsInput = document.getElementById("materials-input");
  const weightInput = document.getElementById("weight-input");
  // grab the form data
  homeBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log(clothingTypeInput.value);
    console.log(brandInput.value);
    console.log(materialsInput.value);
    console.log(weightInput.value);

    const results = await fetch(
      "https://638b8a0e7220b45d2292679a.mockapi.io/results"
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });
}
