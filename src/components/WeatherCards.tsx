// src/components/WeatherCardsList.tsx
import React, { useEffect, useState } from "react"
import WeatherFlashCard from "./WeatherFlashCard"
import { sampleWeatherData } from "../axios/sampleData"
import { get7DaysForecast } from "../axios/fetch";
import WeatherDetailsComponent from "./FlashCardDetails";

const WeatherCardsList: React.FC = () => {
  const [dailyData, setDailyData] = useState(null);
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get7DaysForecast();
        setDailyData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFlashcardClick = (index) => {
    // Update the selected flashcard index
    setSelectedFlashcard(index);
  };

  return (
    <div className="flex grid grid-cols-4 gap-4 hover:bg-color-100 ml-5">
      {dailyData &&
        dailyData?.map((dayData, index) => (
          <div
            key={index}
            onClick={() => handleFlashcardClick(index)}
            className={` ${
              selectedFlashcard === index
                ? "border-4 border-blue rounded-md"
                : ""
            }`}
          >
            <WeatherFlashCard
              day={dayData.date}
              description={dayData.description}
              maxTemperature={dayData.maxTemperature}
              minTemperature={dayData.minTemperature}
              icon={dayData.icon}
            />
          </div>
        ))}
      {/* Conditionally render WeatherDetailsComponent */}
      {selectedFlashcard !== null && (
        <WeatherDetailsComponent data={dailyData[selectedFlashcard]} />
      )}
    </div>
  );
};
export  default WeatherCardsList
