import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/header/Header.jsx";


function App() {
  return (
     <>
       <Header/>
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

    </>
  );
}

export default App;
