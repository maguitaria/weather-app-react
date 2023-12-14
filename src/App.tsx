import "./index.css"
import Chart from "./components/Chart"
import CurrentWeatherCard from "./components/CurrentWeatherCard"
import Header from "./components/Header"
import WeatherCards from "./components/WeatherCards"
import WeatherFlashCards from "./components/WeatherFlashCard"

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Site header  */}
      <Header title={"Weather app"} />
      {/* Page content  */}
      <main className="flex-grow mt-10">

       
          {/* Page sections  */}
<CurrentWeatherCard temperature={0} description={"Today is rainy"}/>
 <div className="container md:mx-auto px-6 mt-4">
          <WeatherCards />
          <Chart />
        </div>
      </main>
    </div>
  ) 
}

export default App
