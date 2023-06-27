import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Routes>
    </Router>
  );
}

export default App;