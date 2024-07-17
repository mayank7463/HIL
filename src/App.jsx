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
import Footer from './components/Footer/Footer';
import HomePage from './Pages/Homepage/HomePage';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import FinancialHigh from './Pages/FinancialHigh/FinancialHigh';

function App() {
  return (
    <>
       <BrowserRouter>
       <Navbar/>
       <div>
             <Routes>
                       <Route path='/' element={<HomePage/>}/>
                       <Route path='/about' element={<AboutHil/>}/>
                       <Route path='/ck-birla' element={<BirlaGroup/>}/>
                       <Route path='/chairman-msg' element={<ChairmanMessage/>}/>
                       <Route path='/ceo-msg' element={<CeoMessage/>}/>
                       <Route path='/financial' element={<Financial/>}/>
                       <Route path='/human-capital' element ={<HumanCapital/>}/>
                       <Route path='/social' element={<Governance/>}/>
                       <Route path='/bod' element={<BoardOfDirectors/>}/>
                       <Route path='/awards' element={<Awards/>}/>
                       <Route path='/value-creation' element={<ValueCreation/>}/>
                       <Route path='/portfolio' element={<Portfolio/>}/>
                       <Route path='/polytech' element={<Polytech/>}/>
                       <Route path='/technology' element={<Technology/>}/>
                       <Route path='/financial-Highlights' element={<FinancialHigh/>}/>
                      
                       
             </Routes>
       </div>
       <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
