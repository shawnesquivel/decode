// console.log("hello world");
const header = document.querySelector(".target");

header.innerText = "Clothing Materials";

// let xpath = "//a[text()='cotton']";

// let matchingElement = document.evaluate(
//   xpath,
//   document,
//   null,
//   XPathResult.FIRST_ORDERED_NODE_TYPE,
//   null
// ).singleNodeValue;

// console.log(matchingElement);

for (const li of document.querySelectorAll("li")) {
  const searchTerm = "cotton";
  const searchTerm2 = "polyester";
  if (li.textContent.toLowerCase().includes(searchTerm)) {
    console.log(li.textContent);
  }
  if (li.textContent.toLowerCase().includes(searchTerm2)) {
    console.log(li.textContent);
  }

  //   also do the same thing for p tags, span tags
}
