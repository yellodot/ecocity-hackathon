import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/footer.jsx";


function App() {
  return (
     <>
       <Header/>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
