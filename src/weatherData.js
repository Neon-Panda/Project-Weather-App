import "./styles.css";

const WeatherURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const key = "?key=JR979CFU4EDPG3TGB5FN8GJP8";

export default class WeatherData {
  static async getData(city) {
    const data = await fetch(WeatherURL + city + key);
    const jsonData = await data.json();

    return jsonData;
  }

  static async processData(city) {
    const data = await this.getData(city);
    const usefulData = {
      address: data.resolvedAddress,
      description: data.description,
      condition: data.currentConditions.conditions,
      humidity: data.currentConditions.humidity,
      icon: data.currentConditions.icon,
      precipitationProb: data.currentConditions.precipprob,
      tempeature: data.currentConditions.temp,
    };
    return usefulData;
  }
}
