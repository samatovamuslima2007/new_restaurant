import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Section from './components/Section';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Section />
    </>
  );
}

export default App;
