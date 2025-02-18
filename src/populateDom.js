import WeatherData from "./weatherData";
import { format } from "date-fns";

export default class PopulateDom {
  static Fahrenheit = false;
  static data;

  static async storeData(city) {
    this.data = await WeatherData.processData(city);
  }

  static infoToday() {
    const location = document.querySelector("#location");
    const temperature = document.querySelector("#temperature");
    const condition = document.querySelector("#condition");
    const time = document.querySelector("#location-time");

    location.textContent = this.data[0].address;
    condition.textContent = this.data[0].condition;
    time.textContent = format(this.data[0].datetime, "EEEE");
    temperature.textContent = this.returnTemp(this.data[0].temperature);
  }

  static infoWeek(city) {
    const weekDay = document.querySelector("#days-of-week");
    weekDay.innerHTML = "";
    for (let i = 0; i < 7; i++) {
      const dayBox = document.createElement("p");
      dayBox.innerHTML = `
        <div class="weather-day">
          <p class="day-name">${format(this.data[i].datetime, "EEEE")}</p>
          <p class="day-temp">${this.returnTemp(this.data[i].temperature)}</p>
         </div>
      `;
      weekDay.append(dayBox);
    }
  }

  static returnTemp(temp) {
    return this.Fahrenheit
      ? Math.round(temp) + "\u00B0F"
      : Math.round(this.celsius(temp)) + "\u00B0C";
  }

  static celsius(temp) {
    return Math.round((temp - 32) * (5 / 9));
  }

  static toggleTemp() {
    this.Fahrenheit = this.Fahrenheit ? false : true;
  }
}
