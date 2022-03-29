import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Presentation from '../Components/Presentation/Presentation';
import Experiences from '../Components/Experiences/Experiences';
import Formations from '../Components/Formations/Formations';
import Skill from '../Components/Skill/Skill';
import { Interest } from '../Components/Interest/Interest';
import BurgerMenu from '../Components/BurgerMenu/BurgerMenu';

const Mobile = () => {


  return (
    <div id="mobile">
      <BurgerMenu/>
      <Routes>
        <Route path='/' element={<Presentation/>} ></Route>
        <Route path='/experiences' element={<Experiences/>} ></Route>
        <Route path='/formations' element={<Formations/>} ></Route>
        <Route path='/competences' element={<Skill/>} ></Route>
        <Route path='/interet' element={<Interest/>} ></Route>
      </Routes>
      </div>
  )
}

export default Mobile