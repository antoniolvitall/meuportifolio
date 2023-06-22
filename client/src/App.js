import React from 'react';
import Header from './components/header';
import Welcome from './components/Welcome';
import About from './components/About';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Header/>
      <Welcome/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App

// cd client npm start