import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Container from "./components/Container";
import Personagem from "./components/Personagens"
import AboutMe from "./components/AboutMe"
import Movie from "./components/Movie"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container> <AboutMe /> </Container>} />
        <Route path="/movie" element={<Container> <Movie /> </Container>} />
        <Route path="/character" element={<Container> <Personagem /> </Container>} />
      </Routes>
    </Router>
  )
}

