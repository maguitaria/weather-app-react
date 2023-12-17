import React from "react";

const WeatherDetailsComponent = ({ data }) => {
  if (!data) {
    // Handle the case where data is undefined or null
    return <p>No weather data available.</p>;
  }
console.log(data)
  const {
    location,
   maxTemperature,
   minTemperature,
   icon,

    feelsLike,
    description,
    windDirection,
    windSpeed,
    gustSpeed,
    precipitation,
    humidity,
    pressure,
    sunrise,
    sunset,
  } = data;

  return (
    <div>
      <h2>{"Oulu"}</h2>
      <p>Temperature: {data.temperature}°C</p>
      <p>Feels like: {feelsLike}°C</p>
      <p>Description: {data.description || "N/A"}</p>
      <img
        alt="weather icon"
        src={data.icon}
        className="w-32 h-32 mx-auto mb-4"
      />
      <p>
        Wind: {windDirection} {windSpeed} m/s
      </p>
      <p>Gust: {gustSpeed} m/s</p>
      <p>Precipitation: {precipitation} mm</p>
      <p>Humidity: {humidity}%</p>
      <p>Pressure: {pressure} hPa</p>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  );
};

export default WeatherDetailsComponent;
