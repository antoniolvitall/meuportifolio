import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';
import NavBar from './components/NavBar';


function App() {

  return (
    <div>
      <NavBar/>
      <Welcome/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App

// cd client npm start