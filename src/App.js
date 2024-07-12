// src/App.js

import React from 'react';
import './App.css';
import TaxiCard from './components/TaxiCard';

function App() {
  return (
    <div className="App">
      <div className="animated-background"></div>
      <header className="App-header">
        <h1>Bienvenidos a su Servicio de Taxi</h1>
      </header>
      <main>
        <TaxiCard />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
