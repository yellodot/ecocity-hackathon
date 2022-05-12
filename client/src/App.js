import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CityDetails from "./components/CityDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city-details" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

export default App;
