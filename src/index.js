import "./styles.css";
import WeatherData from "./weatherData";
import PopulateDom from "./populateDom";

const form = document.querySelector("#search");
const input = document.querySelector("#search-input");
const toggle = document.querySelector("#toggle");
let city = "";

const refreshDisplay = (city) => {
  PopulateDom.infoToday(city);
  PopulateDom.infoWeek(city);
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  city = input.value;
  input.value = "";
  refreshDisplay(city);
});

toggle.addEventListener("click", (event) => {
  PopulateDom.toggleTemp(city);
  refreshDisplay(city);
});
