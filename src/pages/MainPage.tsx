import CurrentWeatherCard from "../components/CurrentWeatherCard";
import Header from "../components/Header";
import WeatherCards from "../components/WeatherCards";
import "../index.css";
import WeatherChart from "../components/HourlyChart";

const MainPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-light/60 overflow-hidden">
      {/* Site header */}
      <div className="header">
        <Header title={"Weather in Oulu, Finland"} />
      </div>
      {/* Page content */}
      <main className=" mt-10">
        <div className="container mx-auto flex flex-col lg:flex-row gap-4">
          {/* CurrentWeatherCard takes full width */}
          <div className=" flex-none sm:max-w-full md:max-w-full lg:w-64 ">
            <CurrentWeatherCard />
          </div>

          {/* Gap between CurrentWeatherCard and WeatherCards/WeatherChart */}
          <div className="w-0 lg:w-4" />
          <div className="flex-1  bg-white/80 flex-row  rounded-md ">
            {/* WeatherCards */}
            <div className="flex-auto flex-row p-5 rounded  ">
              <WeatherCards />

              {/* Gap between WeatherCards and WeatherChart */}
              <div className="p-4" />

              {/* WeatherChart */}
              <div className="w-full h-96 justify-center">
                <WeatherChart />
              </div>
              <div className="p-7"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
