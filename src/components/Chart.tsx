// src/components/WeatherCardsList.tsx
import React from "react"
import WeatherFlashCard from "./WeatherFlashCard"
import { sampleWeatherData } from "../axios/sampleData"

const Chart: React.FC = () => {
  return (
    <div className="flex flex-row">
      {sampleWeatherData.map((dayData, index) => (
        <div key={index}>
          <WeatherFlashCard
            day={dayData.day}
            temperature={dayData.temperature}
            description={dayData.description}
            celsius={dayData.celsius}
          />
        </div>
      ))}
    </div>
  )
}

export default Chart
