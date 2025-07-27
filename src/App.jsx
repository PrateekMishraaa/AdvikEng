import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import SheetMetal from './Pages/SheetMetal'
import Fabricated from './Pages/Fabricated'
import SolarWater from './Pages/SolarWater'
import KitchenBasket from './Pages/KitchenBasket'
import Company from './Pages/Company'
import Team from './Pages/Team'
const App = () => {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sheet-metal' element={<SheetMetal/>}/>
      <Route path='/fabric-assemblies' element={<Fabricated/>}/>
      <Route path='/solar-water' element={<SolarWater/>}/>
      <Route path='/kitchen-basket' element={<KitchenBasket/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/team' element={<Team/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App
