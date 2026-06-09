const TOULOUSE_LAT = 43.6047;
const TOULOUSE_LON = 1.4442;

const WMO_DESCRIPTIONS = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

function describeWeather(code) {
  return WMO_DESCRIPTIONS[code] ?? `Unknown weather (code ${code})`;
}

function getCurrentHourRainProbability(currentWeatherTime, hourly) {
  const hourPrefix = currentWeatherTime.slice(0, 13);
  const index = hourly.time.findIndex((time) => time.startsWith(hourPrefix));

  if (index === -1) {
    throw new Error("Could not find hourly rain probability for the current hour");
  }

  return hourly.precipitation_probability[index];
}

async function fetchToulouseWeather() {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(TOULOUSE_LAT));
  url.searchParams.set("longitude", String(TOULOUSE_LON));
  url.searchParams.set("current_weather", "true");
  url.searchParams.set("hourly", "precipitation_probability");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const { time, temperature, windspeed, weathercode } = data.current_weather;
  const rainProbability = getCurrentHourRainProbability(time, data.hourly);

  console.log("Current weather in Toulouse");
  console.log(`Temperature: ${temperature}°C`);
  console.log(`Windspeed: ${windspeed} km/h`);
  console.log(`Condition: ${describeWeather(weathercode)}`);
  console.log(`Rain probability: ${rainProbability}%`);
}

fetchToulouseWeather().catch((error) => {
  console.error("Failed to fetch weather:", error.message);
  process.exit(1);
});
