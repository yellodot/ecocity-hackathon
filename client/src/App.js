import "./App.css";
import { Routes, Route } from "react-router-dom";
import CityDetails from "./components/CityDetails";
import Home from "./components/Home";
import Header from "./components/header/Header.jsx";
import Contact from "./components/Contact";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CityDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
