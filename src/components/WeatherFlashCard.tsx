import React from "react"
import { useWeatherContext } from "../contexts/TemperatureUnit"

interface WeatherFlashCardProps {
  day: string
  temperature: number
  description: string
}
 
const WeatherFlashCard: React.FC<WeatherFlashCardProps> = ({
  day,
  temperature,
  description,
}) => {

  const { temperatureUnit } = useWeatherContext();

// Convert temperature based on the selected unit
const convertedTemperature =
  temperatureUnit === "Celsius" ? temperature : (temperature * 9) / 5 + 32;
  return (
    <div className="bg-grey p-4 shadow-md rounded-md mx-2">
      <h2 className="text-lg font-bold mb-2">{day}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-xl font-bold mt-4">
      {convertedTemperature.toFixed(2)}&deg;{temperatureUnit.charAt(0)}
      </p>
    </div>
  )
}

export default WeatherFlashCard
