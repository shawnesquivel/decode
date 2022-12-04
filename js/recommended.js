import data from "../data/recommended.json" assert { type: "json" };

// Wrap this in logic depending on the <CLOTHING TYPE> received from the backend

// e.g. if (type === shirt) { display this in the recommended.cards}
data.shirts.forEach((shirt) => {
  console.log("Recommended shirt:", shirt);
});

data.coats.forEach((coat) => {
  console.log("Recommended coat:", coat);
});
