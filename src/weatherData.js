import "./styles.css";

const WeatherURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const key = "?key=JR979CFU4EDPG3TGB5FN8GJP8";

async function weatherData(city) {
  const data = await fetch(WeatherURL + city + key);
  const jsonData = await data.json();

  return jsonData;
}

export default async function ProcessData(city) {
  weatherData = await weatherData(city);
  return {
    address: weatherData.resolvedAddress,
    description: weatherData.description,
    condition: weatherData.currentConditions.conditions,
    humidity: weatherData.currentConditions.humidity,
    icon: weatherData.currentConditions.icon,
    precipitationProb: weatherData.currentConditions.precipprob,
    tempeature: weatherData.currentConditions.temp,
  };
}
