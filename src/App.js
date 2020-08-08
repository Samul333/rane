import React,{useEffect,useState} from 'react';
import './App.css';

import Exper from './Experiment/Exper';
import Draw from './Drawer/Draw';
import Drawr from './Drawr';
import Banner from './Banner/Banner';
import SimpleSlider from './SimpleSilder/SimpleSlider';
import Pros from './Pros/Pros';
import Network from './Network/Network';
import Footer from './Footer/Footer';
import News from './Tabs/News';



function App() {
 
 
  return (
    <div className="App">
       <Exper/>
      <Drawr/>

      <Banner/>
      <SimpleSlider/>

      <Pros/>
      <Network/>
      <News/>
     <Footer/>
        
    </div>
  );
}

export default App;
