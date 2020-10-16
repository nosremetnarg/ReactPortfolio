import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <main>
        <Nav></Nav>
        <About></About>
      </main>
    </div>
  );
}

export default App;
