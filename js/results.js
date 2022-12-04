// import { resultsPageData } from "../scripts.js";

// console.log(resultsPageData
const backendData = JSON.parse(localStorage.getItem("data"));

if (backendData) {
  console.log("backend data", backendData);
} else {
  console.log("no backend data yet");
}
