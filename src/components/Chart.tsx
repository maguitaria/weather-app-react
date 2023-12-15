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
} from "chart.js";
import axios from "axios";
import { WeatherData, getTempAndDay } from "../axios/fetch";

interface WeatherChartProps {}

const WeatherChart: React.FC<WeatherChartProps> = () => {
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
  );

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {},
    },
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
      <h2>Hourly chart</h2>
      {chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherChart;
