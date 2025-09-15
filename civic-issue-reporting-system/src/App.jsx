<<<<<<< HEAD
import {Route , Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
=======
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/AuthLogin/Login';
import Reports from './pages/Reports/Reports';
>>>>>>> b8f4e879621707aa04b89bceb619141aa893cdb8

function App() {

  return (
<<<<<<< HEAD
    <div>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>



    </div>
=======
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/reports' element={<Reports/>}/>
    </Routes>
   
>>>>>>> b8f4e879621707aa04b89bceb619141aa893cdb8
  );
}

export default App
