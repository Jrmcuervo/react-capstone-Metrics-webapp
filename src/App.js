import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import PokeCards from './components/PokeCards';
import PokeData from './components/PokeData';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">First gen pokemons</Link>
      </header>
      <Routes>
        <Route path="/" element={<PokeCards />} />
        <Route path="/details/:pokemonName" element={<PokeData />} />
      </Routes>
    </Router>
  );
}

export default App;
