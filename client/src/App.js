import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <div className='flex w-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
