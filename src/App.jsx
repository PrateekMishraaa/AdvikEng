import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import SheetMetal from './Pages/SheetMetal'
import Fabricated from './Pages/Fabricated'
import SolarWater from './Pages/SolarWater'
import KitchenBasket from './Pages/KitchenBasket'
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
    </Routes>
  </Router>
  </>
  )
}

export default App
