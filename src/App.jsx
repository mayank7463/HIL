import React from 'react'
import BirlaGroup from './Pages/BirlaGroup/BirlaGroup'
import './App.css';
import AboutHil from './Pages/AboutHil/AboutHil';
import ValueCreation from './Pages/ValueCreation/ValueCreation';
import ChairmanMessage from './Pages/ChairmanMessage/ChairmanMessage';
import CeoMessage from './Pages/CeoMessage/CeoMessage';
import Portfolio from './Pages/Portfolio/Portfolio';
import Polytech from './Pages/Polytech/Polytech';
import Technology from './Pages/Technology/Technology';
import HumanCapital from './Pages/HumanCapital/HumanCapital';
import Governance from './Pages/Governance/Governance';
import BoardOfDirectors from './Pages/BoardOfDirectors/BoardOfDirectors';
import Awards from './Pages/Awards/Awards';
import Financial from './components/Financial/Financial';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <BirlaGroup/>
      <AboutHil/>
      <ValueCreation/>
      <ChairmanMessage/>
      <CeoMessage/>
      <Portfolio/>
      <Polytech/>
      <Technology/>
      <HumanCapital/>
      <Governance/>
      <BoardOfDirectors/>
      <Awards/>
      <Financial/> 
    </div>
  )
}

export default App
