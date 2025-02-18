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
    const usefulData = [];
    for (let i = 0; i < 7; i++) {
      usefulData.push({
        address: data.resolvedAddress,
        description: data.days[i].description,
        condition: data.days[i].conditions,
        humidity: data.days[i].humidity,
        precipitationProb: data.days[i].precipprob,
        temperature: data.days[i].temp,
        datetime: new Date(data.days[i].datetime),
        timezone: data.timezone,
      });
    }
    return usefulData;
  }
}
