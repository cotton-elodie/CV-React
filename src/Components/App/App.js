import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../Pages/Home';
import Experiences from '../Experiences/Experiences';
import Formations from '../Formations/Formations';
import Skill from '../Skill/Skill';
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/experience' element={<Experiences/>} ></Route>
        <Route path='/formations' element={<Formations/>} ></Route>
        <Route path='/competences' element={<Skill/>} ></Route>
        <Route path='/projet' element={<Experiences/>} ></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
