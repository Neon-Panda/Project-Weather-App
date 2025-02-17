import "./styles.css";
import WeatherData from "./weatherData";

document.addEventListener("DOMContentLoaded", async () => {
  console.log(await WeatherData.processData("london"));
});

const form = document.querySelector("#form");
const input = document.querySelector("#location");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = input.value;
  input.value = "";
  console.log(await ProcessData(city));
});
