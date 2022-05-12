import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CityDetails from "./components/CityDetails";
import Header from "./components/header/Header.jsx";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city-details" element={<CityDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
