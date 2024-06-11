import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Section from './components/Section.js';
import Contact from './components/Contact.js';
function App(){
  return(
    <div className="App">
      <Header/>
      <Main/>
      <Section/>
      <Contact/>
    </div>
  );
};

export default App;