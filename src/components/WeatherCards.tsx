// src/components/WeatherCardsList.tsx
import React from "react"
import WeatherFlashCard from "./WeatherFlashCard"
import { sampleWeatherData } from "../axios/sampleData"

const WeatherCardsList: React.FC = () => {
  return (
    <div className=" flex grid grid-cols-4 gap-4 hover:bg-color-100 ml-5">
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

export default WeatherCardsList
