import { Chart } from "chart.js";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import Header from "../components/Header";
import WeatherCards from "../components/WeatherCards";
import "../index.css";
import WeatherChart from "../components/HourlyChart";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header */}
      <div className="header bg-gray-light">
        <Header title={"Weather app"} />
      </div>
      {/* Page content */}
      <main className="flex-grow mt-10">
        <div className="container mx-auto flex flex-col p-4 lg:flex-row lg:p-0">
          {/* CurrentWeatherCard takes full height */}
          <div className="flex-none  lg:w-25 p-5">
            <CurrentWeatherCard
              temperature={0}
              description={"Today is rainy"}
              date={"14.12"}
              wind={4.5}
            />
          </div>

          {/* Gap between CurrentWeatherCard and WeatherCards/WeatherChart */}
          <div className="w-0 lg:w-4" />
          <div className="p-4  bg-gray-light/25 container w-full flex-row p-7  rounded mt-4 lg:mt-5 ">
            {/* WeatherCards */}
            <div className="container w-auto flex-row p-7  rounded mt-4 lg:mt-5 ">
              <WeatherCards />

              {/* Gap between WeatherCards and WeatherChart */}
              <div className="p-4" />

              {/* WeatherChart */}
              <div className="w-full h-96 justify-center">
                <WeatherChart />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
