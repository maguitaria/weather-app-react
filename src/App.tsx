import { LocationProvider } from "./contexts/LocationContext";
import "./index.css"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <LocationProvider>
      <MainPage />
    </LocationProvider>
  ); 
}

export default App
