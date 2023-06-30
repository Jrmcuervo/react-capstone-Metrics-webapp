import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import PokeCards from './components/PokeCards';
import PokeData from './components/PokeData';
import iconBack from './assets/icon_back.png';

function App() {
  return (
    <Router>
      <header>
        <Link to="/"><img className="icon-back" src={iconBack} alt="back" /></Link>
        <h1 to="/">First gen pokemons</h1>
      </header>
      <Routes>
        <Route path="/" element={<PokeCards />} />
        <Route path="/details/:pokeName" element={<PokeData />} />
      </Routes>
    </Router>
  );
}

export default App;
