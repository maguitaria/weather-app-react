import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  ChartData,
  TimeScale
} from "chart.js";
import axios from "axios";
import { WeatherData, getTempAndDay } from "../axios/fetch";
import "chartjs-adapter-date-fns";
interface WeatherChartProps {}

const WeatherChart: React.FC<WeatherChartProps> = () => {
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    TimeScale,
    Legend,
    Tooltip
  );

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: -10,
        max: 10,
        ticks: {
          stepSize: 2, // Adjust as needed
        },
        title: {
          display: true,
          text: "Temperature (°C)",
        },
       
      },
      x: {
        type: "time", // Use time axis
        time: {
          unit: "day", // Set the time unit to "hour"
          displayFormats: {
            hour: "MMM d", // Format for hourly labels
          },
          minUnit: "day", // Display a separator when a day ends
        },
        title: {
          display: true,
          text: "Week",
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // smooth lines
      },
      area: {
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Set the background color
      },
    },
    animations: {},
    responsive: true,
    maintainAspectRatio: false,
  };

  const [chartData, setChartData] = useState<ChartData<
    "line",
    number[],
    unknown
  > | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: WeatherData = await getTempAndDay();
        setChartData({
          labels: data.labels,
          datasets: data.datasets
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Hourly chart</h2>
      {chartData ? (
        <div className="mx-auto flex h-96 flex-grow rounded-md bg-blue/20 p-4">
          <Line
            type="line"
            data={chartData}
            options={options}
          />
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default WeatherChart;
