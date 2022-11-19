import './App.css';

import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';
import RandomBeers from './pages/RandomBeers';
import NewBeer from './pages/NewBeer';



function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/beers" element={<Beers />}/>
        <Route path="/beers/:beerId" element={<BeerDetails />}/>
        <Route path="/random-beer" element={<RandomBeers />}/>
        <Route path="/new-beer" element={<NewBeer />}/>
      </Routes>

    </div>
  );
}

export default App;
