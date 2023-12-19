// src/components/__tests__/WeatherCardsList.test.tsx
import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import WeatherCardsList from "../components/WeatherCards";
import * as fetchModule from "../axios/fetch"
import { get7DaysForecast } from "../axios/fetch";

// Mock the get7DaysForecast API call
jest.mock("../../axios/fetch", () => ({
  get7DaysForecast: jest.fn(),
}));

// Sample mock data
const mockWeatherData = [
  {
    date: "2023-12-18",
    maxTemperature: 26,
    minTemperature: 15,
    weatherCode: 100,
    description: "Sunny",
    icon: "sunny-icon",
    // ... add other fields as necessary
  },
  // ... add more mock objects for each day
];

describe("WeatherCardsList", () => {
  beforeEach(() => {
    jest
      .spyOn(fetchModule, "get7DaysForecast")
      .mockResolvedValue(mockWeatherData);
  });
  
  it("renders correctly and fetches data", async () => {
    render(<WeatherCardsList />);
    await waitFor(() => expect(get7DaysForecast).toHaveBeenCalledTimes(1));
    expect(screen.getByText("Sunny")).toBeInTheDocument(); // Change to match actual text/content
    // Add more assertions as needed
  });

  it("shows WeatherDetailsComponent on card click", async () => {
    render(<WeatherCardsList />);
    await waitFor(() => expect(get7DaysForecast).toHaveBeenCalled());
    const firstCard = screen.getByText("Sunny"); // Change to match actual text/content
    fireEvent.click(firstCard);
    // Expectations for what should happen when a card is clicked
    // Add more assertions based on your implementation
  });

  // Add more tests as needed
});
