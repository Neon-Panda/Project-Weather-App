import WeatherData from "./weatherData";
import { format } from "date-fns";

export default class PopulateDom {
  static Fahrenheit = false;

  static async infoToday(city) {
    const data = await WeatherData.processData(city);

    const location = document.querySelector("#location");
    const temperature = document.querySelector("#temperature");
    const condition = document.querySelector("#condition");
    const time = document.querySelector("#location-time");

    location.textContent = data[0].address;
    condition.textContent = data[0].condition;
    time.textContent = format(data[0].datetime, "EEEE");
    temperature.textContent = this.returnTemp(data[0].temperature);
  }

  static async infoWeek(city) {
    const data = await WeatherData.processData(city);

    const weekDay = document.querySelector("#days-of-week");
    weekDay.innerHTML = "";
    for (let i = 0; i < 7; i++) {
      const dayBox = document.createElement("p");
      dayBox.innerHTML = `
        <div class="weather-day">
          <p class="day-name">${format(data[i].datetime, "EEEE")}</p>
          <p class="day-temp">${this.returnTemp(data[i].temperature)}</p>
         </div>
      `;
      weekDay.append(dayBox);
    }
  }

  static returnTemp(temp) {
    return this.Fahrenheit
      ? Math.round(temp) + "\u00B0F"
      : Math.round(this.celsius(temp)) + "\u00B0C";
    console.log("test");
  }

  static celsius(temp) {
    return Math.round((temp - 32) * (5 / 9));
  }

  static toggleTemp() {
    this.Fahrenheit = this.Fahrenheit ? false : true;
  }
}
