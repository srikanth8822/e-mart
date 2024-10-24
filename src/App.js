import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import MobilePage from './stores/pages/MobilePage';
import Acpage from './stores/pages/Acpage';
import Bookpage from './stores/pages/Bookpage';
import Computerspage from './stores/pages/Computerspage';
import Fridgepage from './stores/pages/Fridgepage';
import Furniturepage from './stores/pages/Furniturepage';
import Kitchenpage from './stores/pages/Kitchenpage';
import Menpage from './stores/pages/Menpage';
import Womenpage from './stores/pages/Womenpage';
import Watchpage from './stores/pages/Watchpage';
import Tvpage from './stores/pages/Tvpage';
import Speakerspage from './stores/pages/Speakerspage';
import Mobilesingle from './singles/Mobilesingle';
import Usercart from './stores/Usercart'
import AcSingle from './singles/AcSingle';
import ComputerSingle from './singles/ComputerSingle';
import FridgeSingle from './singles/FridgeSingle';
import KitchenSingle from './singles/KitchenSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import MenSingle from './singles/MenSingle';
import WomanSingle from './singles/WomanSingle';
import WatchSingle from './singles/WatchSingle';





const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Book' element={<Bookpage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/ac' element={<Acpage/>}/>
        <Route path='/computers' element={<Computerspage/>}/>
        <Route path="/fridge" element={<Fridgepage/>}/>
        <Route path='/furniture' element={<Furniturepage/>}/>
        <Route path='/kitchen' element={<Kitchenpage/>}/>
        <Route path='/men' element={<Menpage/>}/>
        <Route path='/women' element={<Womenpage/>}/>
        <Route path='watch' element={<Watchpage/>}/>
        <Route path='/tv' element={<Tvpage/>}/>
        <Route path='/speaker' element={<Speakerspage/>}/>
           <Route path='/mobiles/:id' element={<Mobilesingle/>}/>
        <Route path='/cart' element={<Usercart/>}/>
        <Route path='/ac/:id' element = {<AcSingle/>} />
        <Route path='/computers/:id' element={<ComputerSingle/>}/>
        <Route path='/fridge/:id' element={<FridgeSingle/>}/>
        <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
        <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
        <Route path='/men/:id' element={<MenSingle/>}/>
        <Route path='/woman/:id' element={<WomanSingle/>}/>
        <Route path='/watch/:id' element={<WatchSingle/>}/>
      </Routes>
      </div>
  )
}

export default App