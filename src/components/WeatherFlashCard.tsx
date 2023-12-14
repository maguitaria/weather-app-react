// src/components/WeatherFlashCard.tsx
import React from "react"

interface WeatherFlashCardProps {
  day: string
  temperature: number
  description: string
  celsius: string
}

const WeatherFlashCard: React.FC<WeatherFlashCardProps> = ({
  day,
  temperature,
  description,
  celsius,
}) => {
  return (
    <div className="bg-grey p-4 shadow-md rounded-md mx-2">
      <h2 className="text-lg font-bold mb-2">{day}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-xl font-bold mt-4">
        {temperature}&deg;{celsius}
      </p>
    </div>
  )
}

export default WeatherFlashCard
