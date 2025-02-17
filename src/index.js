import "./styles.css";
import ProcessData from "./weatherData.js";

document.addEventListener("DOMContentLoaded", async () => {
  console.log(await ProcessData("london"));
});
