import React from 'react';
import './Home.css';

import Nav from './Nav.js'
import About from './About';
import EndProgram from './ETE';
import Why from './Why';
import Speakers from './Speakers';
import Event from './Event.js';



function Home() {
  return (
    <div className='head'>
      <Nav/>
      
      <About/>
      <EndProgram/>
      <Why/>   
      <Speakers/>
      <Event/>

    </div>

    
      
    
      
  )

}

export default Home