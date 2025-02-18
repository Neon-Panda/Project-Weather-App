import "./styles.css";
import WeatherData from "./weatherData";
import PopulateDom from "./populateDom";

const form = document.querySelector("#search");
const input = document.querySelector("#search-input");
const toggleTemp = document.querySelector("#toggle");
let city = "";

const refreshDisplay = (city) => {
  PopulateDom.infoToday(city);
  PopulateDom.infoWeek(city);
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  city = input.value;
  input.value = "";
  await PopulateDom.storeData(city);
  refreshDisplay(city);
});

toggleTemp.addEventListener("click", (event) => {
  PopulateDom.toggleTemp();
  refreshDisplay(city);
});

document.addEventListener("DOMContentLoaded", async () => {
  await PopulateDom.storeData("london");
  refreshDisplay("london");
});
